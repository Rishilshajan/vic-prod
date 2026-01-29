import React from 'react';
import { Eye, Rocket, Archive } from 'lucide-react';

interface EditorFooterProps {
    onPreview?: () => void;
    onSaveDraft?: () => void;
    onPublish?: () => void;
    isSaving?: boolean;
}

const EditorFooter: React.FC<EditorFooterProps> = ({ onPreview, onSaveDraft, onPublish, isSaving }) => {
    return (
        <div className="fixed bottom-0 left-0 lg:left-64 right-0 z-50 p-2 sm:p-4 lg:p-6 backdrop-blur-sm pointer-events-none transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 py-3 bg-white/95 shadow-2xl rounded-2xl border border-slate-200 pointer-events-auto">
                <div className="flex items-center gap-4 hidden sm:flex">
                    <div className="flex flex-col">
                        <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Status</span>
                        <span className="flex items-center gap-1.5 text-amber-600 font-semibold text-sm">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            {isSaving ? 'Saving...' : 'Unsaved Changes'}
                        </span>
                    </div>
                </div>

                {/* Mobile Status Dot (Simple) */}
                <div className="sm:hidden flex items-center">
                    <span className={`w-2.5 h-2.5 rounded-full ${isSaving ? 'bg-blue-500 animate-pulse' : 'bg-amber-500'}`} title={isSaving ? "Saving..." : "Unsaved Changes"}></span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                        onClick={onPreview}
                        className="flex-1 sm:flex-none px-3 sm:px-6 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 font-medium text-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                        <Eye size={18} />
                        <span className="hidden sm:inline">Preview</span>
                    </button>
                    <button
                        onClick={onSaveDraft}
                        disabled={isSaving}
                        className="flex-1 sm:flex-none px-3 sm:px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 font-medium text-slate-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        <Archive size={18} className="sm:hidden" />
                        <span className="hidden sm:inline">{isSaving ? 'Saving...' : 'Save as Draft'}</span>
                        <span className="inline sm:hidden">Draft</span>
                    </button>
                    <button
                        onClick={onPublish}
                        disabled={isSaving}
                        className="flex-[2] sm:flex-none px-4 sm:px-8 py-2.5 rounded-xl bg-[#123042] hover:bg-[#0f293a] text-white font-bold shadow-lg shadow-[#123042]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        <Rocket size={18} />
                        <span className="hidden sm:inline">Publish Now</span>
                        <span className="inline sm:hidden">Publish</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditorFooter;
