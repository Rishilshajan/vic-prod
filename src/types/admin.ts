export interface ResourceData {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string;
    coverImage: string | null;
    coverPosition: string; // for object-position (e.g. "50% 50%")
}
