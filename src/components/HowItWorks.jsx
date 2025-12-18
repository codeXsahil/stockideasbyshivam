import { UserPlus, MessageSquare, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <UserPlus size={32} />,
            title: "Join for Free",
            desc: "Click the button below to join our Telegram channel instantly."
        },
        {
            icon: <MessageSquare size={32} />,
            title: "Get Signals",
            desc: "Receive real-time buy/sell alerts with clear charts and logic."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Execute & Profit",
            desc: "Place the trade on your broker and watch your account grow."
        }
    ];

    return (
        <div className="w-full bg-trading-bg py-20 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-16">How It Works</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/3 left-20 right-20 h-0.5 bg-gradient-to-r from-transparent via-trading-main/30 to-transparent -z-10 dashed"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center max-w-sm relative group">
                            <div className="w-20 h-20 bg-[#161b2e] border border-trading-main/30 rounded-full flex items-center justify-center text-trading-main mb-6 shadow-[0_0_15px_rgba(0,224,255,0.1)] group-hover:scale-110 transition-transform duration-300 z-10">
                                {step.icon}
                            </div>
                            <div className="absolute top-0 right-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center font-bold text-sm border border-gray-700">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
