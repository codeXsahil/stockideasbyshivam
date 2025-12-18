import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
    return (
        <div className="w-full bg-[#05080f] py-10 px-4 border-t border-white/5">
            <div className="max-w-5xl mx-auto flex gap-4 items-start opacity-70 hover:opacity-100 transition-opacity">
                <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={20} />
                <div className="text-xs text-gray-400 leading-relaxed">
                    <p className="font-bold text-gray-300 mb-2">RISK WARNING:</p>
                    <p>
                        Trading in financial markets (Stock Market, Forex, Crypto) involves a high degree of risk and may not be suitable for all investors.
                        You could lose some or all of your initial investment. The content provided here is for educational purposes only and should not be construed as financial advice.
                        Past performance is not indicative of future results. Please consult a qualified financial advisor before making any investment decisions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
