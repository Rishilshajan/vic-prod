import React from 'react';
import { FileText } from 'lucide-react';
import type { ResourceData } from '../../../types/admin';

interface GeneralInfoProps {
    data: ResourceData;
    onChange: (field: keyof ResourceData, value: string) => void;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ data, onChange }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-[#123042]">
                <FileText size={20} className="text-[#123042]" />
                General Information
            </h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Resource Title</label>
                    <input
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-transparent focus:ring-2 focus:ring-[#123042]/20 focus:border-[#123042] transition-all outline-none"
                        placeholder="e.g. Prayoga Institute of Education Research – Kriya"
                        type="text"
                        value={data.title}
                        onChange={(e) => onChange('title', e.target.value)}
                    />
                </div>

                {/* Added Excerpt Field */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt / Short Description</label>
                    <textarea
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-transparent focus:ring-2 focus:ring-[#123042]/20 focus:border-[#123042] transition-all outline-none min-h-[100px]"
                        placeholder="A brief summary for the preview card..."
                        value={data.excerpt}
                        onChange={(e) => onChange('excerpt', e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Author Name</label>
                        <input
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-transparent focus:ring-2 focus:ring-[#123042]/20 focus:border-[#123042] transition-all outline-none"
                            placeholder="Tobey Marshall"
                            type="text"
                            value={data.author}
                            onChange={(e) => onChange('author', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Publication Date</label>
                        <input
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-transparent focus:ring-2 focus:ring-[#123042]/20 focus:border-[#123042] transition-all outline-none"
                            type="date"
                            value={data.date}
                            onChange={(e) => onChange('date', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralInfo;
