import React, { useRef, useState } from 'react';
import { Image, Upload, X, Move } from 'lucide-react';

interface MediaUploaderProps {
    coverImage: string | null;
    coverPosition?: string;
    onChange: (value: string | null) => void;
    onPositionChange?: (value: string) => void;
}

const MediaUploader: React.FC<MediaUploaderProps> = ({
    coverImage,
    coverPosition = '50% 50%',
    onChange,
    onPositionChange
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef<{ x: number, y: number } | null>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 6 * 1024 * 1024) {
                alert("File is too large. Max size for cover image is 6MB.");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                onChange(reader.result as string);
                if (onPositionChange) onPositionChange('50% 50%'); // Reset position on new image
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        if (e.cancelable) e.preventDefault(); // Prevent scrolling on touch if possible
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        dragStartRef.current = { x: clientX, y: clientY };
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !dragStartRef.current || !containerRef.current || !onPositionChange) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

        const deltaX = clientX - dragStartRef.current.x;
        const deltaY = clientY - dragStartRef.current.y;

        // Current position parsing
        const [funcX, funcY] = coverPosition.split(' ').map(p => parseFloat(p));

        // Sensitivity factor (slower movement for precision)
        const sensitivity = 0.5;

        // Calculate new percentages
        // Invert delta because dragging image left means showing right side (actually, object-position moves the window over the image)
        // If object-fit is cover, object-position: 0% shows left edge. 100% shows right edge.
        // Dragging mouse LEFT (negative delta) should visually pull the image LEFT? 
        // No, usually "Dragging the image" means if I pull image RIGHT, I want to see the LEFT part.
        // But standard object-position: moving +% moves the viewing window to the right.

        let newX = funcX - (deltaX * sensitivity);
        let newY = funcY - (deltaY * sensitivity);

        // Clamp 0-100
        newX = Math.max(0, Math.min(100, newX));
        newY = Math.max(0, Math.min(100, newY));

        onPositionChange(`${newX.toFixed(1)}% ${newY.toFixed(1)}%`);

        dragStartRef.current = { x: clientX, y: clientY };
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        dragStartRef.current = null;
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-[#123042]">
                <Image size={20} className="text-[#123042]" />
                Cover Image
            </h3>

            <p className="text-sm text-slate-500 mb-4">
                This image will be displayed on the <strong>blog card</strong> and at the <strong>top of the article</strong>.
            </p>

            <div className="space-y-6">
                <div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileSelect}
                    />

                    {coverImage ? (
                        <div className="space-y-3">
                            {/* Preview Area */}
                            <div
                                ref={containerRef}
                                className={`relative group rounded-xl overflow-hidden border border-slate-200 h-48 w-full cursor-move ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                                onMouseDown={handleDragStart}
                                onMouseMove={handleDragMove}
                                onMouseUp={handleDragEnd}
                                onMouseLeave={handleDragEnd}
                                onTouchStart={handleDragStart}
                                onTouchMove={handleDragMove}
                                onTouchEnd={handleDragEnd}
                            >
                                <img
                                    src={coverImage}
                                    alt="Cover"
                                    className="w-full h-full object-cover select-none pointer-events-none"
                                    style={{ objectPosition: coverPosition }}
                                />

                                <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity ${isDragging ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
                                    <span className="text-white text-xs font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-2">
                                        <Move size={12} />
                                        Drag to Reposition
                                    </span>
                                </div>

                                <div className="absolute top-2 right-2 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onChange(null); }}
                                        className="text-white p-2 hover:text-red-400 transition-colors"
                                        title="Remove Image"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 text-center">
                                Touch or click and drag the image to adjust its position.
                            </p>
                        </div>
                    ) : (
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center hover:border-[#123042]/50 hover:bg-slate-50 transition-all cursor-pointer group"
                        >
                            <Upload className="text-slate-400 group-hover:text-[#123042] mb-2 transition-colors" size={32} />
                            <span className="text-sm text-slate-500 font-medium group-hover:text-[#123042]">Upload Cover Image</span>
                            <span className="text-xs text-slate-400 mt-1">PNG, JPG up to 6MB</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MediaUploader;
