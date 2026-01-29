import React from 'react';
import { Settings } from 'lucide-react';
import type { ResourceData } from '../../../types/admin';

interface ResourceSettingsProps {
    data: ResourceData;
    onChange: (field: keyof ResourceData, value: string) => void;
}

const ResourceSettings: React.FC<ResourceSettingsProps> = ({ data, onChange }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#123042]">
                <Settings size={20} className="text-[#123042]" />
                Resource Settings
            </h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <select
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-transparent focus:ring-2 focus:ring-[#123042]/20 focus:border-[#123042] outline-none"
                        value={data.category}
                        onChange={(e) => onChange('category', e.target.value)}
                    >
                        <option>Sustainable Development</option>
                        <option>Education Research</option>
                        <option>Community Resilience</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tags</label>
                    <input
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-transparent focus:ring-2 focus:ring-[#123042]/20 focus:border-[#123042] outline-none"
                        placeholder="Separate with commas"
                        type="text"
                        value={data.tags}
                        onChange={(e) => onChange('tags', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ResourceSettings;
