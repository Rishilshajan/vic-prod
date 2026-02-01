import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Loader2, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import vicLogo from '../assets/VICLOGO.png';
import { supabase } from '../lib/supabaseClient';

const UpdatePassword: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'error' | 'success'>('error');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Ensure user is authenticated (Supabase logs them in after clicking the reset link)
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                // If no session, maybe the link was invalid or expired.
                setToastMessage('Invalid or expired link. Please try "Forgot Password" again.');
                setToastType('error');
                setShowToast(true);
            }
        });
    }, []);

    const showToastNotification = (message: string, type: 'error' | 'success' = 'error') => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            showToastNotification('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            showToastNotification('Password must be at least 6 characters.');
            return;
        }

        setIsLoading(true);

        try {
            const { error } = await supabase.auth.updateUser({ password: password });

            if (error) throw error;

            showToastNotification('Password updated successfully! Redirecting...', 'success');

            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 1500);

        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to update password';
            showToastNotification(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F6F6] font-sans transition-colors duration-200">

            {/* Logo */}
            <div className="mb-8 p-4 bg-white/70 backdrop-blur-md border border-black/5 shadow-sm rounded-[24px]">
                <img src={vicLogo} alt="VIC Logo" className="h-16 w-auto object-contain" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md px-6"
            >
                <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-[#23A6F0]/30 p-8 sm:p-10">
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-[#123042]">Set New Password</h1>
                            <p className="text-[#23A6F0]/80 mt-2">Enter your new secure password</p>
                        </div>

                        <form onSubmit={handleUpdate} className="space-y-6 w-full">
                            <div>
                                <label className="block text-sm font-semibold text-[#123042] mb-2 px-1" htmlFor="new-password">New Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#23A6F0]/60 w-5 h-5" />
                                    <input
                                        className="block w-full h-12 md:h-14 px-12 pr-12 bg-white border border-[#23A6F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#23A6F0]/20 text-[#123042] placeholder-[#23A6F0]/40 transition-all shadow-sm"
                                        id="new-password"
                                        required
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Min 6 characters"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#23A6F0]/60 hover:text-[#0077B6]"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#123042] mb-2 px-1" htmlFor="confirm-password">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#23A6F0]/60 w-5 h-5" />
                                    <input
                                        className="block w-full h-12 md:h-14 px-12 bg-white border border-[#23A6F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#23A6F0]/20 text-[#123042] placeholder-[#23A6F0]/40 transition-all shadow-sm"
                                        id="confirm-password"
                                        required
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Repeat password"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0077B6] hover:bg-[#026aa1] transition-all active:scale-[0.98] shadow-lg shadow-[#0077B6]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Update Password'}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>

            {/* Notification Toast */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 20, x: "-50%" }}
                        className={`fixed bottom-10 left-1/2 ${toastType === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 pointer-events-none z-50`}
                    >
                        {toastType === 'success' ? <CheckCircle className="text-white w-5 h-5" /> : <AlertCircle className="text-white w-5 h-5" />}
                        <span className="text-sm font-medium">{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UpdatePassword;
