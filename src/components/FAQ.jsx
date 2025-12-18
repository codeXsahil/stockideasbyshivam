import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "Do I need a large capital to start?",
        a: "Not at all. You can start learning with as little as ₹5,000. We focus on risk management first, so you can grow your small capital safely."
    },
    {
        q: "Is this suitable for beginners?",
        a: "Yes! 70% of our members are complete beginners. We provide step-by-step guidance, from setting up your demat account to taking your first trade."
    },
    {
        q: "Do you provide calls or tips?",
        a: "We provide high-probability educational setups and analysis. Our goal is to make you independent, not dependent on tips. But yes, we discuss live market opportunities."
    },
    {
        q: "Can I trade from my phone?",
        a: "Absolutely. 90% of our setup execution can be done via mobile apps like Kite or TradingView mobile."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="w-full bg-[#0B0F19] py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-4">
                        <HelpCircle size={14} /> Got Questions?
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked <span className="text-trading-main">Questions</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-[#161b2e] border border-white/5 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-lg">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="text-trading-main" /> : <ChevronDown className="text-gray-500" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FAQ;
