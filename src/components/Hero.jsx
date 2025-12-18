import { motion } from 'framer-motion';
import { Send, Youtube, TrendingUp, BarChart2, DollarSign, PlayCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Hero = () => {
    const handleLiveClick = () => {
        toast('Redirecting to Live Stream...', {
            icon: '🔴',
            style: {
                background: '#161b2e',
                color: '#fff',
            }
        });
    };

    return (
        <div className="relative w-full min-h-[90vh] bg-trading-bg overflow-hidden flex flex-col pt-6 px-4">

            {/* Background Animation (Subtle) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-trading-bg"></div>
            </div>

            {/* Navbar */}
            <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 z-20">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-trading-main to-trading-success rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                        <TrendingUp className="text-[#0B0F19]" size={24} strokeWidth={2.5} />
                    </div>
                    <div className="text-xl md:text-2xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-trading-main to-trading-success">Stock Ideas</span>
                        <span className="text-white ml-2 text-lg">by Shivam</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <a href="https://t.me/stockideasbyshivam" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#0088cc] transition-colors"><Send size={20} /></a>
                    <a href="https://youtube.com/@stockideasbyshivam" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0000] transition-colors"><Youtube size={20} /></a>
                </div>
            </nav>

            {/* Main Content - Split Layout */}
            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-12 z-10 mt-8 md:mt-0">

                {/* Left: Text & CTA */}
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold mb-6 animate-pulse"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        LIVE NOW: Market Analysis
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                    >
                        Trade with <span className="text-trading-main">Confidence</span> <br /> NOT Luck.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0"
                    >
                        Join 50,000+ traders watching our live analysis right now. Get precise levels for NIFTY, BANKNIFTY & XAUUSD.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <button className="bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,136,204,0.3)] transition-all">
                            <Send size={24} /> Join Free Telegram
                        </button>
                        <button onClick={handleLiveClick} className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
                            <PlayCircle size={24} className="text-red-500" /> Watch Live
                        </button>
                    </motion.div>

                    {/* Stats Ticker */}
                    <div className="flex gap-6 mt-12 justify-center md:justify-start text-gray-500 font-mono text-xs uppercase tracking-widest">
                        <div className="flex items-center gap-2"><TrendingUp size={14} className="text-trading-success" /> BTC</div>
                        <div className="flex items-center gap-2"><BarChart2 size={14} className="text-trading-main" /> NIFTY</div>
                        <div className="flex items-center gap-2"><DollarSign size={14} className="text-yellow-500" /> XAUUSD</div>
                    </div>
                </div>

                {/* Right: Live Stream Preview Card (Psychological Anchor) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex-1 w-full max-w-lg"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#000] group cursor-pointer">
                        {/* Live Badge Overlay */}
                        <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                            <WifiIcon /> LIVE
                        </div>

                        {/* Video Thumbnail / Player */}
                        <div className="relative aspect-video bg-gray-900 group-hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg"
                                alt="Live Stream Thumbnail"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
                                    <PlayCircle size={32} fill="white" className="text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Live Chat Mockup (Social Proof) */}
                        <div className="bg-[#111526] p-4 border-t border-white/5">
                            <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div> 1.2K Watching Now
                            </div>
                            <div className="space-y-2 h-24 overflow-hidden mask-gradient-b">
                                <ChatMessage user="Rahul" msg="Great analysis sir! 🔥" color="text-yellow-400" />
                                <ChatMessage user="CryptoKing" msg="Took the XAUUSD trade, running in profit" color="text-green-400" />
                                <ChatMessage user="Amit" msg="Waiting for the next setup" color="text-blue-400" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

const ChatMessage = ({ user, msg, color }) => (
    <div className="flex items-center gap-2 text-xs">
        <span className={`font-bold ${color}`}>{user}:</span>
        <span className="text-gray-400">{msg}</span>
    </div>
);

const WifiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
)

export default Hero;
