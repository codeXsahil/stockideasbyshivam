import { motion } from 'framer-motion';
import { Send, Youtube, TrendingUp, BarChart2, DollarSign } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen bg-trading-bg overflow-hidden flex flex-col items-center pt-6 px-4">

            {/* Background Animation (Simplified Candlesticks) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-4 h-16 bg-trading-success rounded"
                />
                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-1/4 w-4 h-24 bg-red-500 rounded"
                />
                {/* Add more background elements as needed */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-trading-bg"></div>
            </div>

            {/* Navbar / Top Bar */}
            <nav className="w-full max-w-6xl flex justify-between items-center py-4 z-10">
                <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-trading-main to-trading-success">
                    Stock Ideas by Shivam
                </div>
                <div className="flex gap-4">
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#0088cc] transition-colors"><Send size={20} /></a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0000] transition-colors"><Youtube size={20} /></a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl z-10 mt-10">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                >
                    Master the Markets with <span className="text-trading-main">Precision</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl"
                >
                    Join 50,000+ traders getting daily high-accuracy signals, market analysis, and premium learning resources.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
                >
                    <button className="bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,136,204,0.3)] transition-all">
                        <Send size={24} /> Join Free Telegram
                    </button>

                    <button className="border border-red-600 hover:bg-red-600/10 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all">
                        <Youtube size={24} /> Subscribe YouTube
                    </button>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-8 mt-16 text-gray-500 font-mono text-sm uppercase tracking-widest"
                >
                    <div className="flex items-center gap-2"><TrendingUp size={16} className="text-trading-success" /> BTC</div>
                    <div className="flex items-center gap-2"><BarChart2 size={16} className="text-trading-main" /> NIFTY</div>
                    <div className="flex items-center gap-2"><DollarSign size={16} className="text-yellow-500" /> XAUUSD</div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
