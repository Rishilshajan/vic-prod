import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import vicLogo from '../assets/VICLOGO.png';
import { useNavigate } from 'react-router-dom';

// Import editor components
import EditorHeader from '../components/admin/editor/EditorHeader';
import GeneralInfo from '../components/admin/editor/GeneralInfo';
import ContentEditor from '../components/admin/editor/ContentEditor';
import MediaUploader from '../components/admin/editor/MediaUploader';
import EditorFooter from '../components/admin/editor/EditorFooter';
import AdminSidebar from '../components/admin/AdminSidebar';
import ResourcePreviewModal from '../components/admin/ResourcePreviewModal';
import { useSearchParams } from 'react-router-dom';
import { saveResource, getResource } from '../lib/resources';
import { supabase } from '../lib/supabaseClient';

import type { ResourceData } from '../types/admin';

const CreateResource: React.FC = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [searchParams] = useSearchParams();
    const resourceId = searchParams.get('id');

    // Load existing data if editing
    React.useEffect(() => {
        if (resourceId) {
            getResource(resourceId).then((res) => {
                if (res) setData(res);
            }).catch(err => console.error("Failed to load resource:", err));
        }
    }, [resourceId]);

    const handleSave = async (status: 'draft' | 'published') => {
        try {
            setIsSaving(true);

            // 1. Handle Cover Image Upload (if it's a base64 string)
            let finalCoverImage = data.coverImage;

            if (data.coverImage && data.coverImage.startsWith('data:image')) {

                // It's a base64 string, we need to upload it
                const fileExt = data.coverImage.substring(data.coverImage.indexOf('/') + 1, data.coverImage.indexOf(';'));
                const fileName = `${Date.now()}_cover.${fileExt}`;
                const filePath = `covers/${fileName}`;

                // Convert base64 to Blob/File
                const base64Data = data.coverImage.split(',')[1];
                const byteCharacters = atob(base64Data);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: `image/${fileExt}` });

                // Upload
                const { error: uploadError } = await supabase.storage
                    .from('media') // reusing 'media' bucket, assuming 'covers' folder is okay or root
                    .upload(filePath, blob);

                if (uploadError) {
                    console.error("Image upload failed:", uploadError);
                    alert("Failed to upload cover image. Saving without it.");
                    finalCoverImage = null;
                } else {
                    const { data: publicData } = supabase.storage.from('media').getPublicUrl(filePath);
                    finalCoverImage = publicData.publicUrl;
                }
            }

            // 2. Prepare Data with proper image URL
            const payload = { ...data, coverImage: finalCoverImage };

            // 3. Save to DB
            const savedResource = await saveResource(payload, status, resourceId || undefined);

            // 4. Update State to reflect new Data (especially if it was a new insert, we need the ID)
            if (savedResource && savedResource.id) {

                // Update local state to avoid re-uploading the same image (it's now a URL)
                setData(savedResource);

                // Update URL without reload if it was new
                if (!resourceId) {
                    navigate(`?id=${savedResource.id}`, { replace: true });
                }
            }

            alert(`Resource ${status === 'draft' ? 'saved as draft' : 'published'} successfully!`);
            if (status === 'published') navigate('/admin/dashboard');
        } catch (error: unknown) {
            console.error('Error creating resource:', error);
            const msg = error instanceof Error ? error.message : 'Unknown error';
            alert(`Failed to create resource provided: ${msg}`);
        } finally {
            setIsSaving(false);
        }
    };

    // Central State for the Resource
    const [data, setData] = useState<ResourceData>({
        title: '',
        author: '',
        date: new Date().toISOString().split('T')[0],
        excerpt: '',
        content: '',
        category: 'Sustainable Development',
        tags: '',
        coverImage: null,
        coverPosition: '50% 50%'
    });

    const updateField = <K extends keyof ResourceData>(field: K, value: ResourceData[K]) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const handleNavigation = () => {
        navigate('/admin/dashboard');
    };

    return (
        <div className="flex min-h-screen bg-[#F6F6F6] font-sans">

            {/* Sidebar (Mobile: Overlay, Desktop: Static) */}
            <AdminSidebar
                isOpen={isSidebarOpen}
                currentView="blog"
                onNavigate={handleNavigation}
                isOverlay={false}
                onClose={() => setIsSidebarOpen(false)}
            />

            {/* Mobile Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 pb-32 relative lg:ml-64">
                {/* Header */}
                <header className="sticky top-0 z-40 bg-white/80 border-b border-slate-200 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsSidebarOpen(true)}
                                    className="p-2 -ml-2 rounded-lg hover:bg-slate-100 text-[#123042] lg:hidden"
                                >
                                    <Menu size={24} />
                                </button>

                                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 hidden sm:block">
                                    <img src={vicLogo} alt="VIC CMS" className="h-8 w-auto" />
                                </div>
                                <div className="h-6 w-px bg-slate-300 mx-2 hidden sm:block"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-lg font-semibold text-[#123042] hidden sm:block">Admin CMS</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                    <EditorHeader />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Top Row: General Info + Cover Image */}
                        <div className="lg:col-span-2 space-y-6">
                            <GeneralInfo data={data} onChange={updateField} />
                        </div>

                        <div className="space-y-6">
                            <MediaUploader
                                coverImage={data.coverImage}
                                coverPosition={data.coverPosition}
                                onChange={(img) => updateField('coverImage', img)}
                                onPositionChange={(pos) => updateField('coverPosition', pos)}
                            />
                        </div>

                        {/* Bottom Row: Content Editor (Full Width) */}
                        <div className="lg:col-span-3">
                            <ContentEditor content={data.content} onChange={(val) => updateField('content', val)} />
                        </div>
                    </div>
                </main>

                <EditorFooter
                    onPreview={() => setShowPreview(true)}
                    onSaveDraft={() => handleSave('draft')}
                    onPublish={() => handleSave('published')}
                    isSaving={isSaving}
                />
            </div>

            {/* Preview Modal */}
            <ResourcePreviewModal
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
                data={data}
            />
        </div>
    );
};

export default CreateResource;
