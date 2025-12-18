import { ShieldCheck, BarChart2, BookOpen } from 'lucide-react';

const TrustStrip = () => {
    return (
        <div className="w-full bg-trading-bg py-8 border-y border-white/5 relative z-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-6 justify-center">

                <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="p-3 bg-trading-main/20 text-trading-main rounded-lg">
                        <BarChart2 size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Daily Analysis</h3>
                        <p className="text-sm text-gray-400">Pre-market & Live updates</p>
                    </div>
                </div>

                <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="p-3 bg-trading-success/20 text-trading-success rounded-lg">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Risk Managed</h3>
                        <p className="text-sm text-gray-400">Capital protection first</p>
                    </div>
                </div>

                <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Free Learning</h3>
                        <p className="text-sm text-gray-400">Tutorials & Strategies</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrustStrip;
