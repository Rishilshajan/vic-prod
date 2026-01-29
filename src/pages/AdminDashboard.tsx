import React, { useState } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import vicLogo from '../assets/VICLOGO.png';

// Import refactored components
import AdminSidebar from '../components/admin/AdminSidebar';
import DashboardStats from '../components/admin/DashboardStats';
import BlogTable from '../components/admin/BlogTable';
import DraftsWidget from '../components/admin/DraftsWidget';

import { supabase } from '../lib/supabaseClient';

const AdminDashboard: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [currentView, setCurrentView] = useState<'dashboard' | 'blog' | 'drafts'>('dashboard');
    const navigate = useNavigate();

    React.useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user && user.email) {
                setUserEmail(user.email);
            }
        };
        getUser();
    }, []);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen bg-[#F6F6F6] font-sans overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Component */}
            <AdminSidebar
                isOpen={isSidebarOpen}
                userEmail={userEmail}
                currentView={currentView}
                onNavigate={(view) => {
                    setCurrentView(view);
                    setIsSidebarOpen(false); // Close sidebar on mobile nav
                }}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden lg:ml-64">
                {/* Top Header (Mobile Toggle) */}
                <header className="bg-white border-b border-slate-200 lg:hidden p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img src={vicLogo} alt="VIC CMS" className="h-14 w-auto object-contain" />
                    </div>
                    <button onClick={toggleSidebar} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>

                <div className="flex-1 overflow-auto p-4 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-[#123042]">
                                {currentView === 'dashboard' ? 'Dashboard Overview' : currentView === 'blog' ? 'Blog Resources' : 'Drafts'}
                            </h1>
                            <p className="text-slate-500 mt-1">
                                {currentView === 'dashboard'
                                    ? 'Welcome back to your VIC CMS control panel'
                                    : 'Manage articles and case studies for VIC Think Tank'
                                }
                            </p>
                        </div>
                        {currentView === 'blog' && (
                            <button
                                onClick={() => navigate('/admin/resources/new')}
                                className="bg-[#123042] hover:bg-[#0f293a] text-white px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-all shadow-sm active:scale-95"
                            >
                                <Plus size={18} />
                                <span className="font-medium">Add New Post</span>
                            </button>
                        )}
                    </div>

                    {currentView === 'dashboard' ? (
                        <>
                            {/* Stats Component */}
                            <DashboardStats />

                            {/* Drafts Component */}
                            <DraftsWidget />
                        </>
                    ) : (
                        /* Table Component for Blog and Drafts */
                        <BlogTable view={currentView === 'blog' ? 'blog' : 'drafts'} />
                    )}
                </div>
            </main >
        </div >
    );
};

export default AdminDashboard;
