import React from 'react';
import { Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { getDrafts, getPublishedResources, deleteResource, type ResourceDB } from '../../lib/resources';

const TableRow = ({ id, title, excerpt, author, date, status, statusColor, onView, onDelete }: any) => (
    <tr className="hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => onView(id)}>
        <td className="px-6 py-4 max-w-md">
            <div className="flex flex-col">
                <span className="font-semibold text-[#123042] truncate">{title}</span>
                <span className="text-xs text-slate-500 mt-1 line-clamp-1 group-hover:text-slate-700">{excerpt}</span>
            </div>
        </td>
        <td className="px-6 py-4">
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 uppercase">
                    {(author?.trim() || 'U').charAt(0)}
                </div>
                <span className="text-sm text-slate-600">{author || 'Unknown'}</span>
            </div>
        </td>
        <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">{date}</td>
        <td className="px-6 py-4">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
                {status}
            </span>
        </td>
        <td className="px-6 py-4 text-right whitespace-nowrap">
            <div className="flex justify-end space-x-2">
                <button
                    onClick={(e) => { e.stopPropagation(); onView(id); }}
                    className="p-2 text-blue-500 hover:text-blue-700 transition-colors"
                    title="Edit"
                >
                    <Edit2 size={16} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete(id); }}
                    className="p-2 text-red-500 hover:text-red-700 transition-colors"
                    title="Delete"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </td>
    </tr>
);

interface BlogTableProps {
    view: 'blog' | 'drafts';
}

const BlogTable: React.FC<BlogTableProps> = ({ view }) => {
    const navigate = useNavigate();
    // Use Partial<ResourceDB> because list views fetch a lightweight subset of data
    const [resources, setResources] = React.useState<Partial<ResourceDB>[]>([]);
    const [loading, setLoading] = React.useState(true);

    // Pagination State
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 5;

    const fetchData = React.useCallback(async () => {
        setLoading(true);
        try {
            const data = view === 'drafts' ? await getDrafts() : await getPublishedResources();
            setResources(data || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [view]);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this resource?')) {
            await deleteResource(id);
            fetchData();
        }
    };

    const handleView = (id: string) => {
        navigate(`/admin/resources/new?id=${id}`);
    };

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = resources.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(resources.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto min-h-[300px]">
                {loading ? (
                    <div className="flex items-center justify-center h-48 text-slate-400">Loading {view}...</div>
                ) : resources.length === 0 ? (
                    <div className="flex items-center justify-center h-48 text-slate-400">No {view} found.</div>
                ) : (
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Title & Excerpt</th>
                                <th className="px-6 py-4">Author</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {currentItems.map((res) => (
                                <TableRow
                                    key={res.id}
                                    id={res.id}
                                    title={res.title || 'Untitled'}
                                    excerpt={res.excerpt}
                                    author={res.author}
                                    date={res.date}
                                    status={res.status === 'published' ? 'Published' : 'Draft'}
                                    statusColor={res.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}
                                    onView={handleView}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-white">
                <span className="text-sm text-slate-500">
                    Showing {resources.length === 0 ? 0 : indexOfFirstItem + 1} to {Math.min(indexOfLastItem, resources.length)} of {resources.length} entries
                </span>

                {resources.length > itemsPerPage && (
                    <div className="flex space-x-1">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        {/* Simple Logic: Show all pages for now as list is small, or just current */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${currentPage === page
                                    ? 'bg-[#123042] text-white'
                                    : 'border border-slate-200 hover:bg-slate-50 text-slate-600'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogTable;
