import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EditorHeader: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
                <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500 mb-2">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <button
                                onClick={() => navigate('/admin/dashboard')}
                                className="hover:text-[#123042] transition-colors"
                            >
                                Resources
                            </button>
                        </li>
                        <li className="flex items-center space-x-2">
                            <ChevronRight size={14} />
                            <span className="font-medium text-[#123042]">Create New Resource</span>
                        </li>
                    </ol>
                </nav>
                <h2 className="text-3xl font-bold text-[#123042] tracking-tight">Create Blog Resource</h2>
            </div>

            {/* Mobile Actions - Visible only on small screens */}

        </div>
    );
};

export default EditorHeader;
