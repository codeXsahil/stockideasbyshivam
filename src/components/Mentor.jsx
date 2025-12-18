import { Award, Users, TrendingUp } from 'lucide-react';

const Mentor = () => {
    return (
        <div className="w-full bg-[#161b2e] py-20 px-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

                {/* Image / Silhouette */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-trading-main to-trading-bg p-1 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                            {/* Placeholder for real image */}
                            <div className="absolute bottom-0 w-[80%] h-[90%] bg-gray-700 rounded-t-full opacity-50"></div>
                            <span className="text-6xl font-bold text-white/10 z-10">SHIVAM</span>
                        </div>
                        {/* Floating Badge */}
                        {/* <div className="absolute bottom-4 right-4 bg-trading-success text-black font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <Award size={16} /> SEBI Reg. (Pending)
                        </div> */}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold">Meet Your <span className="text-trading-main">Mentor</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Hi, I'm <span className="text-white font-bold">Shivam Rai</span>. I started trading with just ₹5,000 and scaled it to a full-time career. My mission is to stop you from blowing up your account and teach you the *actual* math behind the markets.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="bg-[#0B0F19] p-4 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-white mb-1">5+</div>
                            <div className="text-sm text-gray-400 flex items-center gap-2">
                                <TrendingUp size={14} /> Years Experience
                            </div>
                        </div>
                        <div className="bg-[#0B0F19] p-4 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-white mb-1">10k+</div>
                            <div className="text-sm text-gray-400 flex items-center gap-2">
                                <Users size={14} /> Students Mentored
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mentor;
