import { motion } from 'framer-motion';
import { Send, Youtube, TrendingUp, BarChart2, DollarSign, PlayCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Hero = () => {
    const handleSubscribeClick = () => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-[#161b2e] shadow-2xl rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 border border-red-500/30 p-4`}
            >
                <div className="flex-1 w-0 p-2">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                            <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
                                <Youtube className="text-white" size={24} />
                            </div>
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-white">
                                Confirm Subscription
                            </p>
                            <p className="mt-1 text-sm text-gray-400">
                                Click below to subscribe to Stock Ideas by Shivam!
                            </p>
                            <div className="mt-3 flex gap-3">
                                <a
                                    href="https://youtube.com/@stockideasbyshivam?sub_confirmation=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => toast.dismiss(t.id)}
                                    className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                                >
                                    Subscribe Now
                                </a>
                                <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="text-gray-400 hover:text-white text-sm font-medium px-2 py-1"
                                >
                                    Later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ), { duration: 5000 });
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
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="https://t.me/stockideasbyshivam" target="_blank" className="bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,136,204,0.3)] transition-all">
                                <Send size={24} /> Join Free Telegram
                            </a>
                            <button onClick={handleSubscribeClick} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all">
                                <Youtube size={24} /> Subscribe Now
                            </button>
                        </div>
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
                            <WifiIcon /> LIVE / LATEST
                        </div>

                        {/* Video Thumbnail / Player */}
                        <div className="relative aspect-video bg-gray-900 group-hover:scale-105 transition-transform duration-500">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed?listType=playlist&list=UUrm2Dj3S1vHbbz62QIYsP3w&autoplay=1&mute=1&controls=1&modestbranding=1&loop=1&start=60"
                                title="Latest Market Analysis"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-colors"></div>
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

const CountdownTimer = () => {
    // Simple mock countdown for "Next Session"
    return (
        <span className="text-red-500 font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
            02:15:45
        </span>
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
