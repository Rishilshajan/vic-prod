import { supabase } from './supabaseClient';
import type { ResourceData } from '../types/admin';

export interface ResourceDB extends ResourceData {
    id: string;
    created_at: string;
    updated_at: string;
    status: 'draft' | 'published';
}

interface ResourceRow {
    id: string;
    created_at: string;
    updated_at: string;
    status: 'draft' | 'published';
    title: string;
    author: string;
    date: string;
    excerpt: string;
    content: string;
    cover_image: string;
    cover_position: string;
}

// Helper: Map DB row to Frontend Data
const mapFromDB = (row: Partial<ResourceRow>): ResourceDB => {
    return {
        title: row.title || '',
        author: row.author || '',
        date: row.date || '',
        excerpt: row.excerpt || '',
        content: row.content || '',
        coverImage: row.cover_image || null,
        coverPosition: row.cover_position || '50% 50%',
        // ResourceDB specific
        id: row.id!,
        created_at: row.created_at!,
        updated_at: row.updated_at!,
        status: row.status as 'draft' | 'published' || 'draft'
    };
};

// Helper: Map Frontend Data to DB Payload
const mapToDB = (data: ResourceData, status: 'draft' | 'published') => ({
    title: data.title,
    author: data.author,
    date: data.date,
    excerpt: data.excerpt,
    content: data.content,
    cover_image: data.coverImage,
    cover_position: data.coverPosition,
    status,
    updated_at: new Date().toISOString(),
});

// Cache for full resource details
const resourceCache = new Map<string, ResourceDB>();

export const saveResource = async (data: ResourceData, status: 'draft' | 'published', id?: string) => {
    const payload = mapToDB(data, status);

    if (id) {
        // Update existing
        const { data: result, error } = await supabase
            .from('resources')
            .update(payload)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return mapFromDB(result);
    } else {
        // Insert new
        const { data: result, error } = await supabase
            .from('resources')
            .insert([payload])
            .select()
            .single();

        if (error) throw error;
        return mapFromDB(result);
    }
};

export const getResource = async (id: string) => {
    // Check cache first
    if (resourceCache.has(id)) {
        return resourceCache.get(id)!;
    }

    const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw error;
    const mapped = mapFromDB(data);
    resourceCache.set(id, mapped);
    return mapped;
};

// Lightweight fetch for lists (excludes heavy content/images)
export const getDraftsList = async () => {
    const { data, error } = await supabase
        .from('resources')
        .select('id, title, author, date, status, updated_at, excerpt') // Explicitly select columns, exclude content/cover_image
        .eq('status', 'draft')
        .order('updated_at', { ascending: false });

    if (error) throw error;
    // No mapping needed for list view as we don't access mapped fields
    return data;
};

export const getPublishedList = async () => {
    const { data, error } = await supabase
        .from('resources')
        .select('id, title, author, date, status, updated_at, excerpt')
        .eq('status', 'published')
        .order('created_at', { ascending: true });

    if (error) throw error;
    return data;
};

// Full fetch for editing (backward compatibility)
export const getDrafts = async () => {
    return getDraftsList(); // redirect to list for now, or keep full if needed elsewhere. 
    // Actually, let's keep getDrafts as full fetch if used, but we will replace usages.
    // To be safe, let's make getDrafts/getPublishedResources alias to the List versions for the dashboard, 
    // unless specifically asked for full data (which is only done by getResource(id)).

    // Changing behavior: getDrafts and getPublishedResources now return LIGHTWEIGHT data.
    // This assumes no consumer needs the full content for a list.
    const { data, error } = await supabase
        .from('resources')
        .select('id, title, author, date, status, updated_at, excerpt')
        .eq('status', 'draft')
        .order('updated_at', { ascending: false });

    if (error) throw error;
    return data?.map(mapFromDB) || [];
};

export const getPublishedResources = async () => {
    const { data, error } = await supabase
        .from('resources')
        .select('id, title, author, date, status, updated_at, excerpt, cover_image') // EXPLICITLY NO 'content'
        .eq('status', 'published')
        .order('created_at', { ascending: true })
        .limit(20); // Reduced limit further to speed up rendering if images are heavy

    if (error) throw error;
    return data?.map(mapFromDB) || [];
};

export const prefetchResources = async (ids: string[]) => {
    const neededIds = ids.filter(id => !resourceCache.has(id));
    if (neededIds.length === 0) return;

    const { data, error } = await supabase
        .from('resources')
        .select('*')
        .in('id', neededIds);

    if (error) {
        console.error("Error prefetching resources:", error);
        return;
    }

    data?.forEach(row => {
        resourceCache.set(row.id, mapFromDB(row));
    });
};

export const deleteResource = async (id: string) => {
    const { error } = await supabase
        .from('resources')
        .delete()
        .eq('id', id);

    if (error) throw error;
};


// Helper to get stats for dashboard
export const getStats = async () => {
    // We can do this with two count queries or one select.
    // Given the dashboard needs counts, separate count queries are cleaner.

    // Get Published Count
    const { count: publishedCount, error: pubError } = await supabase
        .from('resources')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'published');

    if (pubError) throw pubError;

    // Get Draft Count
    const { count: draftCount, error: draftError } = await supabase
        .from('resources')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'draft');

    if (draftError) throw draftError;

    return {
        total: (publishedCount || 0) + (draftCount || 0),
        published: publishedCount || 0,
        drafts: draftCount || 0
    };
};
