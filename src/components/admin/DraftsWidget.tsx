import React, { useEffect, useState } from 'react';
import { FileEdit } from 'lucide-react';
import { getDrafts, type ResourceDB } from '../../lib/resources';
import { useNavigate } from 'react-router-dom';



interface DraftCardProps {
    id: string;
    title: string;
    date: string;
    author: string;
}

const DraftCard: React.FC<DraftCardProps> = ({ id, title, date, author }) => {
    const navigate = useNavigate();

    // Calculate relative time (e.g., "2 hours ago") - simplified for now
    const displayDate = new Date(date).toLocaleDateString();

    return (
        <div
            onClick={() => navigate(`/admin/resources/new?id=${id}`)}
            className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex justify-between items-center group hover:border-amber-300 transition-colors cursor-pointer"
        >
            <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-2.5 rounded-lg text-amber-600 group-hover:bg-amber-200 transition-colors">
                    <FileEdit size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-sm text-[#123042] line-clamp-1">{title || 'Untitled Draft'}</h4>
                    <p className="text-xs text-amber-700/70">Last modified {displayDate} by {author || 'Unknown'}</p>
                </div>
            </div>
            <button className="text-xs font-bold text-amber-700 hover:underline hover:text-amber-800 tracking-wide whitespace-nowrap ml-2">
                RESUME EDIT
            </button>
        </div>
    );
};

const DraftsWidget: React.FC = () => {
    const [drafts, setDrafts] = useState<Partial<ResourceDB>[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDrafts = async () => {
            try {
                const data = await getDrafts();
                setDrafts(data ? data.slice(0, 4) : []); // Show top 4
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchDrafts();
    }, []);

    if (loading) return <div className="mt-8 text-sm text-slate-400">Loading drafts...</div>;
    if (drafts.length === 0) return null; // Don't show widget if no drafts

    return (
        <div className="mt-8">
            <h3 className="text-lg font-bold text-[#123042] mb-4">Drafts needing attention</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drafts.map(draft => (
                    <DraftCard
                        key={draft.id}
                        id={draft.id || ''}
                        title={draft.title || 'Untitled'}
                        date={draft.updated_at || draft.created_at || new Date().toISOString()}
                        author={draft.author || 'Unknown Author'}
                    />
                ))}
            </div>
        </div>
    );
};

export default DraftsWidget;
