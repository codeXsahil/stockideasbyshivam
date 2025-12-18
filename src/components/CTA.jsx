import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <div className="w-full bg-[#0B0F19] py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Start Profiting?</h2>
                <p className="text-gray-400 text-xl mb-10">
                    Join the community today and get your first signal within minutes.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#0088cc] hover:bg-[#0077b5] text-white px-10 py-5 rounded-xl font-bold text-xl flex items-center gap-3 mx-auto shadow-[0_0_20px_rgba(0,136,204,0.3)] transition-all"
                >
                    <Send size={24} /> Join Telegram For Free
                </motion.button>
            </div>
        </div>
    );
};

export default CTA;
