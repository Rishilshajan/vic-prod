import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import vicLogo from '../assets/VICLOGO.png';
import { supabase } from '../lib/supabaseClient';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem('adminEmail');
        if (storedEmail) {
            setEmail(storedEmail);
            setRememberMe(true);
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // 1. Verify Credentials (Password Login)
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (signInError) throw signInError;

            // 2. If successful, handle 'Remember Me'
            if (rememberMe) {
                localStorage.setItem('adminEmail', email);
            } else {
                localStorage.removeItem('adminEmail');
            }

            // 3. Trigger Email Verification Link (Magic Link) for the 2nd step
            const { error: otpError } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    emailRedirectTo: window.location.origin + '/admin/dashboard',
                }
            });

            if (otpError) throw otpError;

            // 4. Navigate to verification screen
            navigate('/admin/verify', { state: { email } });

        } catch (error: any) {
            console.error('Login error:', error);
            if (error.status === 429 || error.message?.includes('429')) {
                alert('Too many attempts. Please wait 60 seconds before trying again.');
            } else if (error.message?.includes('Invalid login credentials')) {
                alert('Invalid email or password. Please checking your credentials.');
            } else {
                alert(error.message || 'Authentication failed');
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
                {/* Login Card - White Background to match Contact/Careers */}
                <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-[#23A6F0]/30 p-8 sm:p-10">
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-[#123042]">Admin CMS Login</h1>
                            <p className="text-[#23A6F0]/80 mt-2">Manage your blog resources and content</p>
                        </div>
                        <form action="#" className="space-y-6 w-full" method="POST" onSubmit={handleLogin}>
                            <div>
                                <label className="block text-sm font-semibold text-[#123042] mb-2 px-1" htmlFor="email">Email Address</label>
                                <div className="relative">
                                    <input
                                        className="block w-full h-12 md:h-14 px-6 bg-white border border-[#23A6F0] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#23A6F0] text-[#123042] placeholder-[#23A6F0] placeholder:italic placeholder:font-light transition-all shadow-sm pl-6"
                                        id="email"
                                        name="email"
                                        placeholder="name@vic-thinktank.org"
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2 px-1">
                                    <label className="block text-sm font-semibold text-[#123042]" htmlFor="password">Password</label>
                                </div>
                                <div className="relative">
                                    <input
                                        className="block w-full h-12 md:h-14 px-6 bg-white border border-[#23A6F0] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#23A6F0] text-[#123042] placeholder-[#23A6F0] placeholder:italic placeholder:font-light transition-all shadow-sm pl-6 pr-12"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#23A6F0] hover:text-[#123042] transition-colors focus:outline-none"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
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
                                    {isLoading ? 'Signing In...' : 'Sign In'}
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
        </div>
    );
};

export default AdminLogin;
