import { Lock, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiumGroup = () => {
    return (
        <div className="w-full py-20 px-4 relative overflow-hidden">
            {/* Dynamic Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-trading-main/20 via-[#0B0F19] to-trading-success/20 animate-pulse"></div>

            <div className="max-w-4xl mx-auto relative z-10 text-center bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0F19] p-4 rounded-full border border-trading-main shadow-[0_0_20px_rgba(0,224,255,0.4)]">
                    <Lock size={32} className="text-trading-main" />
                </div>

                <div className="inline-block px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold mb-6 border border-yellow-500/30">
                    LIMITED ACCESS
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-trading-main to-trading-success">Premium Intelligence</span></h2>

                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                    Get the exact setups we trade. Entry, Exit, SL, and Logic explained.
                    Join the inner circle of profitable traders.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
                    {['High Accuracy Signals', 'Live Mentorship', 'Capital Protection Strategy', 'Crypto & Stocks'].map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                            <Star size={18} className="text-yellow-400 fill-yellow-400" />
                            <span className="font-medium">{feat}</span>
                        </div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-trading-main to-trading-success text-black font-bold text-xl px-10 py-5 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center gap-3 mx-auto"
                >
                    <Lock size={20} /> Unlock Premium Access <ArrowRight size={20} />
                </motion.button>

            </div>
        </div>
    );
};

export default PremiumGroup;
