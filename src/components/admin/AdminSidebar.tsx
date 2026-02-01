import React from 'react';
import { LayoutDashboard, FileText, LogOut, X } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import vicLogo from '../../assets/VICLOGO.png';

interface AdminSidebarProps {
    isOpen: boolean;
    userEmail?: string;
    currentView: 'dashboard' | 'blog' | 'drafts';
    onNavigate: (view: 'dashboard' | 'blog' | 'drafts') => void;
    isOverlay?: boolean;
    onClose?: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
    isOpen,
    userEmail = 'admin@vic.org',
    currentView,
    onNavigate,
    isOverlay = false,
    onClose
}) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        if (window.confirm("Are you sure you want to log out?")) {
            await supabase.auth.signOut();
            navigate('/');
        }
    };

    return (
        <aside className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-[#123042] text-white transform transition-transform duration-300 ease-in-out flex flex-col
            ${isOverlay
                ? (isOpen ? 'translate-x-0' : '-translate-x-full')
                : `${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`
            }
        `}>
            <div className="p-6 flex items-center justify-between">
                <div className="bg-white rounded-[16px] py-4 px-2 flex justify-center items-center shadow-lg">
                    <img src={vicLogo} alt="VIC CMS" className="h-12 w-auto object-contain" />
                </div>

                {/* Mobile Close Button */}
                {isOverlay && (
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-white/70 hover:text-white lg:hidden"
                    >
                        <X size={24} />
                    </button>
                )}
            </div>

            <nav className="flex-1 mt-2 px-4 space-y-2">
                <button
                    onClick={() => onNavigate('dashboard')}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-colors group text-left
                        ${currentView === 'dashboard'
                            ? 'bg-white/10 text-white border-l-4 border-[#23A6F0]'
                            : 'hover:bg-white/10 text-slate-300 hover:text-white'
                        }`}
                >
                    <LayoutDashboard size={20} className={currentView === 'dashboard' ? "text-[#23A6F0]" : "text-slate-400 group-hover:text-white"} />
                    <span className="font-medium">Dashboard</span>
                </button>

                <button
                    onClick={() => onNavigate('blog')}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-colors group text-left
                        ${currentView === 'blog'
                            ? 'bg-white/10 text-white border-l-4 border-[#23A6F0]'
                            : 'hover:bg-white/10 text-slate-300 hover:text-white'
                        }`}
                >
                    <FileText size={20} className={currentView === 'blog' ? "text-[#23A6F0]" : "text-slate-400 group-hover:text-white"} />
                    <span className="font-medium">Blog Resources</span>
                </button>

                <button
                    onClick={() => onNavigate('drafts')}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-colors group text-left
                        ${currentView === 'drafts'
                            ? 'bg-white/10 text-white border-l-4 border-[#23A6F0]'
                            : 'hover:bg-white/10 text-slate-300 hover:text-white'
                        }`}
                >
                    <FileText size={20} className={currentView === 'drafts' ? "text-[#23A6F0]" : "text-slate-400 group-hover:text-white"} />
                    <span className="font-medium">Drafts</span>
                </button>
            </nav>

            <div className="p-4 border-t border-white/10 mt-auto space-y-4">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors group text-left"
                >
                    <LogOut size={20} className="text-slate-400 group-hover:text-white" />
                    <span className="font-medium">Logout</span>
                </button>

                <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold uppercase ring-2 ring-white/10">
                        {userEmail.charAt(0)}
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-semibold truncate max-w-[140px]" title={userEmail}>{userEmail}</p>
                        <p className="text-xs text-slate-400">Super Admin</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
