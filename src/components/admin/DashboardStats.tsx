import React from 'react';

interface StatCardProps {
    label: string;
    value: string;
    valueColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, valueColor = "text-[#123042]" }) => (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <p className={`text-3xl font-bold mt-2 ${valueColor}`}>{value}</p>
    </div>
);

import { getStats } from '../../lib/resources';

const DashboardStats: React.FC = () => {
    const [stats, setStats] = React.useState({ total: 0, published: 0, drafts: 0 });
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchStats = async () => {
            const data = await getStats();
            setStats(data);
            setLoading(false);
        };
        fetchStats();
    }, []);

    if (loading) return <div className="animate-pulse h-24 bg-slate-200 rounded-xl mb-8"></div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatCard label="Total Posts" value={stats.total.toString()} />
            <StatCard label="Published" value={stats.published.toString()} valueColor="text-green-600" />
            <StatCard label="Drafts" value={stats.drafts.toString()} valueColor="text-amber-600" />
        </div>
    );
};

export default DashboardStats;
