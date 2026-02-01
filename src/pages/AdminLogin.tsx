import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowRight, Lock, Mail, Loader2, Eye, EyeOff } from 'lucide-react';
import vicLogo from '../assets/VICLOGO.png';
import { supabase } from '../lib/supabaseClient';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Auth Step: 'email' (enter email) | 'password' (enter password)
    const [authStep, setAuthStep] = useState<'email' | 'password'>('email');

    const navigate = useNavigate();

    useEffect(() => {

        // Check for existing session
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                navigate('/admin/dashboard');
            }
        });
    }, [navigate]);

    const showToastError = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const validateEmail = (emailToCheck: string) => {
        const normalizedEmail = emailToCheck.toLowerCase().trim();
        const vicDomainRegex = /@((\w+\.)*vic\.org\.in)$/;
        const allowedEmail1 = import.meta.env.VITE_ALLOWED_EMAIL1;
        const allowedEmail2 = import.meta.env.VITE_ALLOWED_EMAIL2;

        const isValidDomain = vicDomainRegex.test(normalizedEmail);
        const isAllowedEmail =
            (allowedEmail1 && normalizedEmail === allowedEmail1.toLowerCase().trim()) ||
            (allowedEmail2 && normalizedEmail === allowedEmail2.toLowerCase().trim());

        return isValidDomain || isAllowedEmail;
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            showToastError('Access restricted. Unauthorized email domain.');
            return;
        }

        setAuthStep('password');
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const normalizedEmail = email.toLowerCase().trim();

        try {
            // 1. Try to Sign In
            const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
                email: normalizedEmail,
                password: password,
            });

            if (signInData.user) {
                navigate('/admin/dashboard');
                return;
            }

            if (signInError) {
                if (signInError.message === 'Invalid login credentials') {

                    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                        email: normalizedEmail,
                        password: password,
                    });

                    if (signUpData.user) {
                        if (signUpData.session) {
                            navigate('/admin/dashboard');
                        } else {
                            showToastError('Account created. Please verify your email if required.');
                        }
                        return;
                    }

                    if (signUpError) {

                        if (signUpError.message.includes('already registered') || signUpError.message.includes('already exists')) {
                            showToastError('Incorrect password.');
                        } else {

                            // Genuine other error or true signup failure
                            showToastError(signUpError.message);
                        }
                    } else {

                        // SignUp didn't error but didn't give session? (Email confirmation case)
                        showToastError('Please check your email for verification.');
                    }

                } else {
                    // Other sign in error (e.g. rate limit)
                    showToastError(signInError.message);
                }
            }

        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Authentication failed';
            showToastError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            showToastError('Please enter your email strictly first.');
            setAuthStep('email');
            return;
        }
        if (!validateEmail(email)) {
            showToastError('Access restricted.');
            return;
        }

        setIsLoading(true);
        try {
            console.log("Attempting password reset for:", email);
            console.log("Redirect URL:", window.location.origin + '/admin/update-password');

            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin + '/admin/update-password',
            });

            if (error) {
                console.error("Reset Password Error:", error);

                // Check for common Redirect URL error (usually 400 or specific message)
                if (error.status === 400 || error.message?.toLowerCase().includes('redirect_url')) {
                    throw new Error('Supabase Config Error: Please add "' + window.location.origin + '/admin/update-password" to your Redirect URLs in Supabase Dashboard.');
                }
                throw error;
            }

            showToastError('Password reset link sent! Check your email.');
        } catch (error: unknown) {
            console.error("Forgot Password catch:", error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to send reset email.';
            showToastError(errorMessage);
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
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md px-6"
            >
                <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-[#23A6F0]/30 p-8 sm:p-10">
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-[#123042]">Admin CMS Login</h1>
                            <p className="text-[#23A6F0]/80 mt-2">
                                {authStep === 'email' ? 'Enter your organization email' : 'Enter your password'}
                            </p>
                        </div>

                        {authStep === 'email' ? (
                            <form onSubmit={handleEmailSubmit} className="space-y-6 w-full">
                                <div>
                                    <label className="block text-sm font-semibold text-[#123042] mb-2 px-1" htmlFor="email">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#23A6F0]/60 w-5 h-5" />
                                        <input
                                            className="block w-full h-12 md:h-14 px-12 bg-white border border-[#23A6F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#23A6F0]/20 text-[#123042] placeholder-[#23A6F0]/40 transition-all shadow-sm"
                                            id="email"
                                            name="email"
                                            required
                                            type="email"
                                            placeholder="name@vic.org.in"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoFocus
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0077B6] hover:bg-[#026aa1] transition-all active:scale-[0.98] shadow-lg shadow-[#0077B6]/20"
                                >
                                    Continue <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={handleLogin} className="space-y-6 w-full">
                                <div className="text-sm font-medium text-slate-500 mb-2 flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                                    <span className="truncate max-w-[200px]">{email}</span>
                                    <button
                                        type="button"
                                        onClick={() => setAuthStep('email')}
                                        className="text-[#0077B6] hover:underline text-xs"
                                    >
                                        Change
                                    </button>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2 px-1">
                                        <label className="block text-sm font-semibold text-[#123042]" htmlFor="password">Password</label>
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#23A6F0]/60 w-5 h-5" />
                                        <input
                                            className="block w-full h-12 md:h-14 px-12 pr-12 bg-white border border-[#23A6F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#23A6F0]/20 text-[#123042] placeholder-[#23A6F0]/40 transition-all shadow-sm"
                                            id="password"
                                            name="password"
                                            required
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoFocus
                                            disabled={isLoading}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#23A6F0]/60 hover:text-[#0077B6]"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    <div className="flex justify-end mt-2">
                                        <button
                                            type="button"
                                            onClick={handleForgotPassword}
                                            className="text-xs text-[#0077B6] hover:underline font-medium"
                                        >
                                            Forgot Password?
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0077B6] hover:bg-[#026aa1] transition-all active:scale-[0.98] shadow-lg shadow-[#0077B6]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
                                </button>
                            </form>
                        )}

                        <div className="mt-8 pt-6 border-t border-slate-100 text-center w-full">
                            <p className="text-xs text-slate-400">
                                © 2026 VIC Think Tank for Sustainable Development<br />
                                Authorized Access Only.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Error Toast */}
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
