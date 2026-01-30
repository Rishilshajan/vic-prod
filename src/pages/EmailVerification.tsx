import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { RefreshCw, ArrowLeft, CheckCircle, MailCheck } from 'lucide-react';
import vicLogo from '../assets/VICLOGO.png';
import { supabase } from '../lib/supabaseClient';

const EmailVerification: React.FC = () => {
    const [isResending, setIsResending] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const location = useLocation();
    const email = location.state?.email;

    const handleResend = async () => {
        if (!email) return;

        setIsResending(true);
        try {
            const { error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    emailRedirectTo: window.location.origin + '/admin/dashboard',
                }
            });

            if (error) throw error;

            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } catch (error: unknown) {
            let errorMessage = "Failed to resend link.";
            let errorStatus: number | undefined;

            if (typeof error === 'object' && error !== null) {
                if ('message' in error) errorMessage = String((error as { message: unknown }).message);
                if ('status' in error) errorStatus = Number((error as { status: unknown }).status);
            }

            if (errorStatus === 429 || errorMessage?.includes('429')) {
                alert('Please wait 60 seconds before requesting a new link.');
            } else {
                alert(errorMessage);
            }
        } finally {
            setIsResending(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F6F6] font-sans transition-colors duration-200">

            {/* Logo with Glass Effect (Matches AdminLogin) */}
            <div className="mb-8 p-4 bg-white/70 backdrop-blur-md border border-black/5 shadow-sm rounded-[24px]">
                <img src={vicLogo} alt="VIC Logo" className="h-16 w-auto object-contain" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md px-6"
            >

                {/* Card Container (Matches AdminLogin) */}
                <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-[#23A6F0]/30 p-8 sm:p-10">
                    <div className="flex flex-col items-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50/50 mb-6 text-[#123042]">
                            <MailCheck className="w-8 h-8" />
                        </div>

                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-[#123042]">Check your email</h1>
                            <p className="text-[#23A6F0]/80 mt-2 text-sm max-w-[280px] mx-auto leading-relaxed">
                                We've sent a login link to <br />
                                <span className="font-semibold text-[#123042]">{email}</span>
                            </p>
                            <p className="text-slate-400 text-xs mt-4">
                                Click the link in the email to access the CMS.
                            </p>
                        </div>

                        <div className="w-full space-y-4">
                            <button
                                onClick={handleResend}
                                disabled={isResending}
                                className="group relative w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0077B6] hover:bg-[#026aa1] transition-all active:scale-[0.98] shadow-lg shadow-[#0077B6]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isResending ? (
                                    <>
                                        <RefreshCw className="animate-spin w-4 h-4" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="w-4 h-4" />
                                        Resend Link
                                    </>
                                )}
                            </button>

                            <div className="pt-2 text-center">
                                <a href="/admin" className="text-xs text-slate-400 hover:text-[#123042] transition-colors flex items-center justify-center gap-1">
                                    <ArrowLeft className="w-3 h-3" />
                                    Back to login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-500">
                        © 2026 VIC Think Tank
                    </p>
                </div>
            </motion.div>

            {/* Toast Notification */}
            <motion.div
                initial={{ opacity: 0, y: 50, x: "-50%" }}
                animate={{ opacity: showToast ? 1 : 0, y: showToast ? 0 : 50, x: "-50%" }}
                className="fixed bottom-10 left-1/2 bg-[#123042] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 pointer-events-none z-50"
            >
                <CheckCircle className="text-[#23A6F0] w-5 h-5" />
                <span className="text-sm font-medium">Link sent! Check your inbox.</span>
            </motion.div>
        </div>
    );
};

export default EmailVerification;
