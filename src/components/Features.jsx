import { CheckCircle } from 'lucide-react';

const Features = () => {
    return (
        <div className="w-full bg-[#0B0F19] py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 flex flex-col gap-24">

                {/* Feature 1: Charts Analysis */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 w-full">
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#161b2e] aspect-video flex items-center justify-center group">
                            {/* Mock Chart UI */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-trading-main/5"></div>
                            <div className="w-[90%] h-[70%] border border-white/5 rounded relative">
                                {/* Fake Candles */}
                                <div className="absolute bottom-10 left-10 w-4 h-20 bg-green-500 rounded-sm"></div>
                                <div className="absolute bottom-14 left-16 w-4 h-12 bg-red-500 rounded-sm"></div>
                                <div className="absolute bottom-10 left-24 w-4 h-32 bg-green-500 rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                                <div className="absolute top-1/2 left-1/4 w-full h-[1px] bg-white/10 border-t border-dashed"></div>
                            </div>
                            <span className="absolute bottom-4 right-4 text-xs text-gray-500 font-mono">TRADINGVIEW MOCKUP</span>
                        </div>
                    </div>
                    <div className="flex-1 space-y-6">
                        <h3 className="text-3xl font-bold">Precision <span className="text-trading-main">Chart Analysis</span></h3>
                        <p className="text-gray-400 leading-relaxed">
                            Stop guessing. Get clear, data-backed setups for NIFTY, BANKNIFTY, and Crypto. We focus on high-probability zones.
                        </p>
                        <ul className="space-y-4">
                            {['Price Action Based', 'No Lagging Indicators', 'Clear Entry & Exit Levels'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-trading-success" size={20} />
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Feature 2: Telegram Alerts (Reverse-Row) */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 w-full">
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#161b2e] aspect-video flex items-center justify-center p-8">
                            {/* Mock Telegram Message */}
                            <div className="w-full max-w-sm bg-[#1e2337] rounded-lg p-4 border-l-4 border-trading-main shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                                <div className="text-xs text-trading-main font-bold mb-1">VIP SIGNAL 🔔</div>
                                <div className="text-white font-mono text-sm mb-2">BUY XAUUSD @ 2030.50</div>
                                <div className="flex gap-2 text-xs">
                                    <span className="text-green-400">TP1: 2035</span>
                                    <span className="text-green-400">TP2: 2040</span>
                                    <span className="text-red-400">SL: 2025</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-trading-main/20 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-6">
                        <h3 className="text-3xl font-bold">Instant <span className="text-trading-main">Telegram Alerts</span></h3>
                        <p className="text-gray-400 leading-relaxed">
                            Never miss a move. Get real-time notifications directly to your phone. Fast, reliable, and actionable.
                        </p>
                        <ul className="space-y-4">
                            {['Forex & Crypto Signals', 'Risk Management Guidance', '24/7 Market Updates'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-trading-success" size={20} />
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;
