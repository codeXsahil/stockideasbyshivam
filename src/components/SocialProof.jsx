const SocialProof = () => {
    return (
        <div className="w-full bg-[#111526] py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8 text-center">

                <div className="flex-1 min-w-[200px]">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Telegram Members</div>
                </div>

                <div className="w-px h-16 bg-white/10 hidden md:block"></div>

                <div className="flex-1 min-w-[200px]">
                    <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">120K+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">YouTube Subscribers</div>
                </div>

                <div className="w-px h-16 bg-white/10 hidden md:block"></div>

                <div className="flex-1 min-w-[200px]">
                    <div className="text-4xl md:text-5xl font-bold text-trading-success mb-2">85%</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Accuracy Rate</div>
                </div>

            </div>
        </div>
    );
};

export default SocialProof;
