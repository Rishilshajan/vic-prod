import React, { useRef, useEffect, useState } from 'react';
import { Edit3, Bold, Italic, Underline, List, ListOrdered, Image as ImageIcon, Video, Trash2, Loader2 } from 'lucide-react';
import { supabase } from '../../../lib/supabaseClient';

interface ContentEditorProps {
    content: string;
    onChange: (value: string) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ content, onChange }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);
    const [activeFormats, setActiveFormats] = useState<Record<string, boolean>>({});
    const [isUploading, setIsUploading] = useState(false);


    // Sync content changes from parent
    useEffect(() => {
        if (editorRef.current && content !== editorRef.current.innerHTML) {
            // Only update if the editor is empty (initial load) or the content is significantly different
            // preventing cursor jumps during active typing is hard, but for loading a draft, this is essential.
            // We check if the editor is "effectively empty" or if we are just loading data.
            const isEditorEmpty = editorRef.current.innerHTML === '' || editorRef.current.innerHTML === '<p><br></p>';
            if (isEditorEmpty || !editorRef.current.contains(document.activeElement)) {
                editorRef.current.innerHTML = content;
            }
        }
    }, [content]);

    const checkFormats = () => {
        if (!document.getSelection()?.rangeCount) return;

        setActiveFormats({
            bold: document.queryCommandState('bold'),
            italic: document.queryCommandState('italic'),
            underline: document.queryCommandState('underline'),
            h2: document.queryCommandValue('formatBlock') === 'h2',
            h3: document.queryCommandValue('formatBlock') === 'h3',
            p: document.queryCommandValue('formatBlock') === 'p',
            unorderedList: document.queryCommandState('insertUnorderedList'),
            orderedList: document.queryCommandState('insertOrderedList'),
        });
    };

    const handleInput = () => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
            checkFormats();
        }
    };

    const handleCursorActivity = () => {
        checkFormats();
    };

    const execCommand = (command: string, value: string | undefined = undefined) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
        checkFormats();
    };

    const uploadFile = async (file: File, folder: 'images' | 'videos'): Promise<string | null> => {

        // File Size Restrictions
        const MB = 1024 * 1024;
        const limit = folder === 'images' ? 5 * MB : 50 * MB;

        if (file.size > limit) {
            alert(`File is too large. Max size for ${folder} is ${Math.floor(limit / MB)}MB.`);
            return null;
        }

        try {
            setIsUploading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
            const filePath = `${folder}/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('media')
                .upload(filePath, file);

            if (uploadError) {
                console.error('Upload Error:', uploadError);
                alert(`Upload failed: ${uploadError.message}. Please try again.`);
                return null;
            }

            const { data } = supabase.storage.from('media').getPublicUrl(filePath);
            return data.publicUrl;
        } catch (error) {
            console.error('Error:', error);
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = await uploadFile(file, 'images');
            if (url) {
                const imgHtml = `<div class="my-6"><img src="${url}" alt="Image" class="w-full h-[400px] object-cover rounded-2xl shadow-sm" /><p class="text-center text-sm text-gray-500 mt-2 italic">Image Caption</p></div><p><br></p>`;
                execCommand('insertHTML', imgHtml);
            }
        }
        e.target.value = '';
    };

    const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = await uploadFile(file, 'videos');
            if (url) {
                const videoHtml = `<div class="my-6"><video src="${url}" controls class="w-full rounded-2xl shadow-sm"></video></div><p><br></p>`;
                execCommand('insertHTML', videoHtml);
            }
        }
        e.target.value = '';
    };

    const insertVideo = () => {

        // Offer choice: Upload or URL
        const choice = prompt("Type '1' to Upload Video, '2' for YouTube/URL");
        if (choice === '1') {
            videoInputRef.current?.click();
        } else if (choice === '2') {
            const url = prompt("Enter video URL (YouTube embed link or video source):");
            if (url) {
                if (url.includes('youtube.com') || url.includes('youtu.be')) {
                    let embedUrl = url;
                    if (url.includes('watch?v=')) embedUrl = url.replace('watch?v=', 'embed/');

                    const embedHtml = `<div class="aspect-video my-6 rounded-2xl overflow-hidden shadow-sm"><iframe src="${embedUrl}" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;
                    execCommand('insertHTML', embedHtml);
                } else {
                    execCommand('insertHTML', `<div class="my-6"><video src="${url}" controls class="w-full rounded-2xl shadow-sm"></video></div><p><br></p>`);
                }
            }
        }
    };

    const clearContent = () => {
        if (window.confirm("Are you sure you want to clear all content?")) {
            onChange('');
            if (editorRef.current) editorRef.current.innerHTML = '';
        }
    };

    const ToolbarButton = ({
        icon: Icon,
        isActive,
        onClick,
        title,
        label
    }: {
        icon?: React.ElementType,
        isActive?: boolean,
        onClick: () => void,
        title: string,
        label?: string
    }) => (
        <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClick}
            className={`p-1.5 rounded transition-colors flex items-center justify-center min-w-[32px] font-medium text-sm
                ${isActive
                    ? 'bg-[#123042] text-white'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
            title={title}
        >
            {Icon && <Icon size={18} />}
            {label}
        </button>
    );

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative">
            {isUploading && (
                <div className="absolute inset-0 bg-white/80 z-50 flex items-center justify-center rounded-2xl">
                    <div className="flex flex-col items-center gap-3">
                        <Loader2 className="animate-spin text-[#123042]" size={32} />
                        <span className="font-medium text-[#123042]">Uploading Media...</span>
                    </div>
                </div>
            )}

            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-[#123042]">
                <Edit3 size={20} className="text-[#123042]" />
                Resource Content
            </h3>

            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
            />
            <input
                type="file"
                ref={videoInputRef}
                className="hidden"
                accept="video/*"
                onChange={handleVideoUpload}
            />

            <div className="border border-slate-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#123042]/20 focus-within:border-[#123042] transition-all">
                {/* Toolbar */}
                <div className="bg-slate-50 border-b border-slate-300 p-2 flex flex-wrap gap-1 sticky top-0 z-10 items-center">
                    <ToolbarButton icon={Bold} title="Bold" isActive={activeFormats.bold} onClick={() => execCommand('bold')} />
                    <ToolbarButton icon={Italic} title="Italic" isActive={activeFormats.italic} onClick={() => execCommand('italic')} />
                    <ToolbarButton icon={Underline} title="Underline" isActive={activeFormats.underline} onClick={() => execCommand('underline')} />

                    <div className="w-px h-6 bg-slate-300 mx-1 self-center"></div>

                    <ToolbarButton label="H2" title="Heading 2" isActive={activeFormats.h2} onClick={() => execCommand('formatBlock', 'h2')} />
                    <ToolbarButton label="H3" title="Heading 3" isActive={activeFormats.h3} onClick={() => execCommand('formatBlock', 'h3')} />
                    <ToolbarButton label="P" title="Paragraph" isActive={activeFormats.p} onClick={() => execCommand('formatBlock', 'p')} />

                    <div className="w-px h-6 bg-slate-300 mx-1 self-center"></div>

                    <ToolbarButton icon={List} title="Bullet List" isActive={activeFormats.unorderedList} onClick={() => execCommand('insertUnorderedList')} />
                    <ToolbarButton icon={ListOrdered} title="Numbered List" isActive={activeFormats.orderedList} onClick={() => execCommand('insertOrderedList')} />

                    <div className="w-px h-6 bg-slate-300 mx-1 self-center"></div>

                    <ToolbarButton icon={ImageIcon} title="Insert Image" onClick={() => fileInputRef.current?.click()} />
                    <ToolbarButton icon={Video} title="Insert Video (Upload or URL)" onClick={insertVideo} />

                    <div className="flex-1"></div>

                    <button onMouseDown={(e) => e.preventDefault()} onClick={clearContent} className="p-1.5 hover:bg-red-100 text-red-500 rounded transition-colors" title="Clear Content"><Trash2 size={18} /></button>
                </div>

                {/* Editable Area */}
                <div
                    ref={editorRef}
                    contentEditable
                    onInput={handleInput}
                    onKeyUp={handleCursorActivity}
                    onMouseUp={handleCursorActivity}
                    className="w-full px-8 py-8 bg-transparent border-none focus:ring-0 text-slate-800 leading-relaxed outline-none min-h-[500px] prose prose-slate max-w-none 
                        prose-headings:font-bold prose-headings:text-[#123042]
                        prose-p:my-4
                        prose-ul:list-disc prose-ul:pl-5 
                        prose-ol:list-decimal prose-ol:pl-5
                        prose-li:my-1
                        [&>img]:rounded-2xl [&>img]:shadow-sm [&>img]:my-6"
                    suppressContentEditableWarning={true}
                />
            </div>
            <p className="text-xs text-slate-400 mt-2">
                Tip: Insert images directly. Videos can be uploaded or embedded (YouTube).
            </p>
        </div>
    );
};

export default ContentEditor;
