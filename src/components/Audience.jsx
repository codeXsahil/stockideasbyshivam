import { motion } from 'framer-motion';
import { User, TrendingUp, Briefcase, GraduationCap } from 'lucide-react';

const Audience = () => {
    const cards = [
        {
            icon: <User size={40} />,
            title: "Beginner",
            desc: "New to trading? Get clear, step-by-step guidance."
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Trader",
            desc: "Sharpen your edge with high-precision signals."
        },
        {
            icon: <Briefcase size={40} />,
            title: "Investor",
            desc: "Long-term analysis for sustainable wealth creation."
        },
        {
            icon: <GraduationCap size={40} />,
            title: "Learner",
            desc: "Deep dive into technical analysis and market psychology."
        }
    ];

    return (
        <div className="w-full bg-trading-bg py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Who Is This For?</h2>
                    <div className="w-24 h-1 bg-trading-main mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, borderColor: '#00E0FF' }}
                            className="bg-[#111526] border border-transparent p-8 rounded-2xl flex flex-col items-center text-center group cursor-default transition-all duration-300"
                        >
                            <div className="p-4 bg-gray-800/50 rounded-full mb-6 text-gray-400 group-hover:text-trading-main group-hover:bg-trading-main/10 transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Audience;
