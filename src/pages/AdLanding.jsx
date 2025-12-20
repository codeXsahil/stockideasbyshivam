import { useState, useEffect } from 'react';
import { Send, TrendingUp, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const AdLanding = () => {
    const getSecondsToMidnight = () => {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        return Math.floor((midnight - now) / 1000);
    };

    const [timeLeft, setTimeLeft] = useState(getSecondsToMidnight());

    // Countdown Timer Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Scarcity Logic (Fake spot decrement)
    useEffect(() => {
        const interval = setInterval(() => {
            setSpotsLeft(prev => (prev > 3 ? prev - 1 : 3)); // Don't go below 3
        }, 45000); // Reduce spot every 45 sec
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const handleJoinClick = () => {
        window.open('https://t.me/stockideasbyshivam', '_blank');
        toast.success("Welcome to the Inner Circle! 🚀");
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white font-body selection:bg-trading-main selection:text-black flex flex-col">
            <Toaster position="bottom-center" />

            {/* Minimal Sticky Header */}
            <header className="sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <TrendingUp className="text-trading-main" size={24} />
                    <span className="font-bold text-lg tracking-wide">Stock Ideas <span className="text-gray-500 text-sm font-normal">by Shivam</span></span>
                </div>
                <div className="hidden md:flex items-center gap-2 text-red-500 font-mono font-bold bg-red-500/10 px-3 py-1 rounded border border-red-500/20">
                    <Clock size={16} /> Offer Ends: {formatTime(timeLeft)}
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20 text-center max-w-4xl mx-auto w-full">

                {/* Scarcity Badge */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-4 py-1.5 rounded-full text-sm font-bold mb-8"
                >
                    <Users size={16} /> Only {spotsLeft} Free Spots Left Today
                </motion.div>

                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                >
                    Stop Gambling. <br />
                    Start Trading with <span className="text-trading-main">Math & Logic.</span>
                </motion.h1>

                <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                    Join India's most accurate intraday community.
                    Get 2-3 high probability setups daily for NIFTY, BANKNIFTY & GOLD.
                    <br /><span className="text-white font-bold">No noise. Just pure price action.</span>
                </p>

                {/* Panic Timer Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-md bg-red-500/10 border border-red-500/50 rounded-2xl p-6 mb-10 backdrop-blur-sm relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>

                    {/* Pulsing Dot */}
                    <div className="flex items-center justify-center gap-2 text-red-500 font-bold mb-2 uppercase tracking-widest text-xs">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                        </span>
                        Limited Time Offer
                    </div>

                    <div className="flex justify-center items-end gap-1 font-mono text-4xl md:text-5xl font-bold text-white mb-2">
                        <span>{formatTime(timeLeft)}</span>
                        <span className="text-sm text-gray-400 font-sans mb-1 font-normal">Remaining</span>
                    </div>
                </motion.div>

                {/* Primary CTA */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleJoinClick}
                    className="w-full md:w-auto bg-[#0088cc] hover:bg-[#0077b5] text-white text-xl font-bold px-10 py-5 rounded-xl shadow-[0_0_40px_rgba(0,136,204,0.4)] flex items-center justify-center gap-3 animate-pulse-slow active:scale-95 transition-all"
                >
                    <Send size={28} /> JOIN FREE TELEGRAM NOW
                </motion.button>
                <div className="mt-4 text-sm text-gray-500 flex flex-col md:flex-row gap-2 items-center justify-center">
                    <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-green-500" /> 100% Free Lifetime Access</span>
                    <span className="hidden md:inline">•</span>
                    <span>No Credit Card Required</span>
                </div>

                {/* Value/Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
                    <BenefitCard
                        icon={<TrendingUp className="text-trading-main" />}
                        title="90% Accuracy"
                        desc="We don't overtrade. We wait for the perfect setup."
                    />
                    <BenefitCard
                        icon={<ShieldCheck className="text-green-500" />}
                        title="Risk Managed"
                        desc="Capital protection is our #1 priority. Always."
                    />
                    <BenefitCard
                        icon={<Users className="text-blue-500" />}
                        title="50k+ Traders"
                        desc="Join the largest active trading community in India."
                    />
                </div>

            </main>

            {/* Social Proof Footer */}
            <div className="bg-[#161b2e] border-t border-white/5 py-4 w-full">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-xs md:text-sm text-gray-400">
                    <div>
                        🔒 Verified by <span className="text-white font-bold">StockIdeas Team</span>
                    </div>
                    <div className="flex gap-4">
                        <span>4.9/5 Rating ⭐</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

const BenefitCard = ({ icon, title, desc }) => (
    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
);

export default AdLanding;
