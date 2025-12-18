import { motion } from 'framer-motion';

const wins = [
    { id: 1, user: "Trader_Rahul", profit: "₹12,500", type: "Intraday" },
    { id: 2, user: "Vikram_S", profit: "₹45,000", type: "Option Buying" },
    { id: 3, user: "AnkitCrypto", profit: "$850", type: "XAUUSD" },
    { id: 4, user: "Neha_G", profit: "₹8,200", type: "Scalping" },
    { id: 5, user: "Rajeev1990", profit: "₹1.2L", type: "BankNifty" },
    { id: 6, user: "SamTrade", profit: "₹22,000", type: "Swing" },
];

const WinWall = () => {
    return (
        <div className="w-full bg-[#0B0F19] py-16 border-t border-white/5 overflow-hidden">
            <div className="text-center mb-10">
                <span className="text-trading-success font-bold tracking-widest text-sm uppercase">Real Results</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Wall of <span className="text-trading-main">Wins</span></h2>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0B0F19] to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0B0F19] to-transparent z-10"></div>

                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                >
                    {[...wins, ...wins, ...wins].map((win, index) => (
                        <div key={index} className="w-72 bg-[#161b2e] border border-white/10 p-4 rounded-xl flex flex-col gap-3 hover:border-trading-success/50 transition-colors">
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <span>@{win.user}</span>
                                <span className="text-xs bg-white/5 px-2 py-0.5 rounded">{win.type}</span>
                            </div>
                            <div className="text-2xl font-bold text-trading-success">
                                +{win.profit} <span className="text-xs text-gray-500 font-normal">PROFIT</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-trading-success w-3/4"></div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default WinWall;
