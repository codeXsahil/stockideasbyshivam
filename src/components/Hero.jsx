import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Youtube, TrendingUp, BarChart2, DollarSign, PlayCircle, Volume2, Wifi } from 'lucide-react';
import toast from 'react-hot-toast';
import MatrixBackground from './MatrixBackground';

const chatData = [
    { user: "Rahul", msg: "Great analysis sir! 🔥", color: "text-yellow-400" },
    { user: "CryptoKing", msg: "Took the XAUUSD trade", color: "text-green-400" },
    { user: "Amit", msg: "Waiting for the next setup", color: "text-blue-400" },
    { user: "Sneha", msg: "Nifty flying! 🚀", color: "text-purple-400" },
    { user: "Trader_Vikram", msg: "Profit booked. Thanks!", color: "text-orange-400" },
    { user: "Ankit007", msg: "Should I enter now?", color: "text-gray-400" },
    { user: "Priya_S", msg: "Join the telegram guys, it's free", color: "text-pink-400" },
    { user: "GoldMiner", msg: "XAU huge rejection candle", color: "text-yellow-200" },
    { user: "Rohit", msg: "Stoploss hit but recovered", color: "text-red-400" },
    { user: "System", msg: "Don't forget to Subscribe! 🔔", color: "text-red-500 font-bold bg-red-500/10 px-1 rounded" }
];

const Hero = () => {
    // State for interactive features
    const [viewerCount, setViewerCount] = useState(1245);
    const [messages, setMessages] = useState(chatData.slice(0, 4));
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const [badgeText, setBadgeText] = useState("LIVE / LATEST");
    const [isLiveMarket, setIsLiveMarket] = useState(false);

    // 1. Dynamic Viewer Count Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 4); // Fluctuates by -4 to +6
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // 2. Auto-Scroll Chat Effect
    useEffect(() => {
        const interval = setInterval(() => {
            const randomMsg = chatData[Math.floor(Math.random() * chatData.length)];
            setMessages(prev => {
                const newMsgs = [...prev, { ...randomMsg, id: Date.now() }];
                if (newMsgs.length > 5) newMsgs.shift(); // Keep only last 5
                return newMsgs;
            });
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    // 3. Time-Based Badge Logic (IST)
    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const ist = new Date(utc + (3600000 * 5.5)); // UTC + 5:30

            const hours = ist.getHours();
            const minutes = ist.getMinutes();
            const totalMinutes = hours * 60 + minutes;

            // Market Hours: 9:15 AM (555 min) to 3:30 PM (930 min)
            if (totalMinutes >= 555 && totalMinutes <= 930) {
                setBadgeText("🔴 LIVE MARKET");
                setIsLiveMarket(true);
            } else {
                setBadgeText("📺 LATEST ANALYSIS");
                setIsLiveMarket(false);
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const getSecondsToMidnight = () => {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        return Math.floor((midnight - now) / 1000);
    };

    const [timeLeft, setTimeLeft] = useState(getSecondsToMidnight());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full min-h-[90vh] bg-trading-bg overflow-hidden flex flex-col pt-6 px-4">

            {/* Matrix Rain Effect */}
            <MatrixBackground />

            {/* Background Animation (Subtle Gradient Overlay) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
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
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${isLiveMarket ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-green-500/10 border-green-500/20 text-green-500'} border text-sm font-bold mb-6 animate-pulse`}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isLiveMarket ? 'bg-red-400' : 'bg-green-400'} opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${isLiveMarket ? 'bg-red-500' : 'bg-green-500'}`}></span>
                        </span>
                        {badgeText}
                    </motion.div>

                    {/* Countdown Timer */}
                    {/* <div className="flex items-center gap-2 mb-4 text-sm font-mono text-gray-400 justify-center md:justify-start">
                        <span>NEXT LIVE SESSION:</span>
                        <CountdownTimer />
                    </div> */}

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

                    {/* Panic Timer Card for Hero */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            borderColor: ["rgba(239, 68, 68, 0.3)", "rgba(239, 68, 68, 1)", "rgba(239, 68, 68, 0.3)"], // Flash Border
                            backgroundColor: ["rgba(239, 68, 68, 0.1)", "rgba(239, 68, 68, 0.2)", "rgba(239, 68, 68, 0.1)"] // Flash BG
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8, // Fast Pulse
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="w-full md:w-fit border border-red-500/30 rounded-xl p-4 mb-8 backdrop-blur-sm relative overflow-hidden group mx-auto md:mx-0 cursor-pointer hover:scale-105 transition-transform"
                    >
                        <div className="flex items-center gap-4 justify-between md:justify-start">
                            <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-[10px] md:text-xs whitespace-nowrap">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                                </span>
                                Free Access Ends
                            </div>
                            <motion.div
                                animate={{ x: [0, -3, 3, -3, 3, 0] }} // Shake Effect
                                transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3 }} // Shake every 3s
                                className="font-mono text-xl md:text-2xl font-bold text-white"
                            >
                                {formatTime(timeLeft)}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="https://t.me/stockideasbyshivam" target="_blank" className="bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,136,204,0.3)] transition-all">
                                <Send size={24} /> Join Free Telegram
                            </a>
                            <a href="https://youtube.com/@stockideasbyshivam?sub_confirmation=1" target="_blank" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all">
                                <Youtube size={24} /> Subscribe Now
                            </a>
                        </div>

                        {/* Cheat Sheet Lead Magnet */}
                        <div className="text-center md:text-left">
                            <button onClick={() => toast.success("Checklist sent to your Telegram!")} className="text-sm text-gray-500 hover:text-trading-main underline decoration-dashed underline-offset-4 transition-colors">
                                🎁 Download Free 5-Step Intraday Checklist
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

                {/* Right: Premium YouTube Embed with "Add All" Features */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex-1 w-full max-w-lg"
                >
                    {/* Neon Pulse Border Container */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#000] group cursor-pointer shadow-[0_0_40px_rgba(255,0,0,0.2)] animate-pulse-slow">

                        {/* Dynamic Live Badge */}
                        <div className={`absolute top-4 left-4 z-10 ${isLiveMarket ? 'bg-red-600' : 'bg-green-600'} text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-lg`}>
                            <Wifi size={12} className="animate-pulse" /> {badgeText}
                        </div>

                        {/* Video Thumbnail / Player */}
                        <div className="relative aspect-video bg-gray-900">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed?listType=playlist&list=UUrm2Dj3S1vHbbz62QIYsP3w&autoplay=1&mute=1&controls=1&modestbranding=1&loop=1&start=60"
                                title="Latest Market Analysis"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>


                        </div>

                        {/* Dynamic Glassmorphic Live Chat */}
                        <div className="bg-[#111526]/80 backdrop-blur-md p-4 border-t border-white/5 h-48 flex flex-col">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="font-mono">{viewerCount.toLocaleString()} Watching</span>
                                </div>
                                <button className="text-xs text-trading-main hover:text-white transition-colors">Top Chat ▼</button>
                            </div>

                            <div className="flex-1 overflow-hidden relative mask-gradient-b space-y-2">
                                <AnimatePresence initial={false}>
                                    {messages.map((msg, i) => (
                                        <motion.div
                                            key={msg.id || i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-start gap-2 text-xs"
                                        >
                                            <div className={`w-5 h-5 rounded-full ${msg.user === 'System' ? 'bg-red-500' : 'bg-gray-700'} flex-shrink-0 flex items-center justify-center text-[10px]`}>
                                                {msg.user[0]}
                                            </div>
                                            <div>
                                                <span className={`font-bold mr-2 ${msg.color}`}>{msg.user}</span>
                                                <span className="text-gray-300">{msg.msg}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
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

export default Hero;
