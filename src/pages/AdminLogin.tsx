import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import vicLogo from '../assets/VICLOGO.png';
import { supabase } from '../lib/supabaseClient';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem('adminEmail');
        if (storedEmail) {
            setEmail(storedEmail);
            setRememberMe(true);
        }
    }, []);

    const showToastError = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Strict Domain Validation
        const normalizedEmail = email.toLowerCase().trim();

        // Regex to match strictly @vic.org.in or @*.vic.org.in
        // Matches: user@vic.org.in, user@admin.vic.org.in
        // Rejects: user@gmail.com, user@fakevic.org.in
        const vicDomainRegex = /@((\w+\.)*vic\.org\.in)$/;
        const allowedEmail1 = import.meta.env.VITE_ALLOWED_EMAIL1;
        const allowedEmail2 = import.meta.env.VITE_ALLOWED_EMAIL2;

        const isValidDomain = vicDomainRegex.test(normalizedEmail);
        const isAllowedEmail =
            (allowedEmail1 && normalizedEmail === allowedEmail1.toLowerCase().trim()) ||
            (allowedEmail2 && normalizedEmail === allowedEmail2.toLowerCase().trim());

        if (!isValidDomain && !isAllowedEmail) {
            showToastError(`Invalid email domain.`);
            return;
        }

        setIsLoading(true);

        try {
            // 2. Send Magic Link
            const { error: otpError } = await supabase.auth.signInWithOtp({
                email: normalizedEmail,
                options: {
                    emailRedirectTo: window.location.origin + '/admin/dashboard',
                    shouldCreateUser: true,
                }
            });

            if (otpError) throw otpError;

            // 3. Handle 'Remember Me'
            if (rememberMe) {
                localStorage.setItem('adminEmail', email);
            } else {
                localStorage.removeItem('adminEmail');
            }

            // 4. Navigate to verification screen
            navigate('/admin/verify', { state: { email: normalizedEmail } });

        } catch (error: unknown) {
            console.error('Login error:', error);
            let errorMessage = 'Authentication failed';
            let errorStatus: number | undefined;

            if (typeof error === 'object' && error !== null) {
                if ('message' in error) errorMessage = String((error as { message: unknown }).message);
                if ('status' in error) errorStatus = Number((error as { status: unknown }).status);
            }

            if (errorStatus === 429 || errorMessage?.includes('429')) {
                showToastError('Too many attempts. Please wait 60s.');
            } else {
                showToastError(errorMessage);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F6F6] font-sans transition-colors duration-200">
            {/* Logo with Glass Effect */}
            <div className="mb-8 p-4 bg-white/70 backdrop-blur-md border border-black/5 shadow-sm rounded-[24px]">
                <img src={vicLogo} alt="VIC Logo" className="h-16 w-auto object-contain" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md px-6"
            >
                {/* Login Card */}
                <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-[#23A6F0]/30 p-8 sm:p-10">
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-[#123042]">Admin CMS Login</h1>
                            <p className="text-[#23A6F0]/80 mt-2">Enter your organization email to continue</p>
                        </div>
                        <form action="#" className="space-y-6 w-full" method="POST" onSubmit={handleLogin}>
                            <div>
                                <label className="block text-sm font-semibold text-[#123042] mb-2 px-1" htmlFor="email">Email Address</label>
                                <div className="relative">
                                    <input
                                        className="block w-full h-12 md:h-14 px-6 bg-white border border-[#23A6F0] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#23A6F0] text-[#123042] placeholder-[#23A6F0] placeholder:italic placeholder:font-light transition-all shadow-sm pl-6"
                                        id="email"
                                        name="email"
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center px-1">
                                <input
                                    className="w-4 h-4 text-[#0077B6] border-[#23A6F0] rounded focus:ring-[#23A6F0]"
                                    id="remember"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label className="ml-2 text-sm text-[#123042]/70" htmlFor="remember">Remember this device</label>
                            </div>
                            <div className="pt-2">
                                <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0077B6] hover:bg-[#026aa1] transition-all active:scale-[0.98] shadow-lg shadow-[#0077B6]/20 disabled:opacity-70 disabled:cursor-not-allowed" type="submit" disabled={isLoading}>
                                    {isLoading ? 'Sending Link...' : 'Send Login Link'}
                                </button>
                            </div>
                        </form>
                        <div className="mt-8 pt-6 border-t border-slate-100 text-center w-full">
                            <p className="text-xs text-slate-400">
                                © 2026 VIC Think Tank for Sustainable Development.<br />
                                Authorized Access Only.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-500">
                        Facing issues? <a className="text-[#0077B6] font-medium hover:underline" href="mailto:admin@vic-thinktank.org">Contact System Administrator</a>
                    </p>
                </div>
            </motion.div>

            {/* Error Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 20, x: "-50%" }}
                        className="fixed bottom-10 left-1/2 bg-red-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 pointer-events-none z-50"
                    >
                        <AlertCircle className="text-white w-5 h-5" />
                        <span className="text-sm font-medium">{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminLogin;
