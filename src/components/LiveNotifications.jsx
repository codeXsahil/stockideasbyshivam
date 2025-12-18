import { useEffect } from 'react';
import toast from 'react-hot-toast';

const names = ["Rahul", "Amit", "Priya", "Vikram", "Sneha", "Rohan", "Ankit", "Pooja"];
const actions = ["joined the Free Channel", "just watched the analysis", "started following", "shared the stream"];
const locations = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad"];

const LiveNotifications = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];
            const randomLoc = locations[Math.floor(Math.random() * locations.length)];

            // 30% chance to show a toast every interval to not be annoying
            if (Math.random() > 0.7) {
                toast(`${randomName} from ${randomLoc} ${randomAction} 🚀`, {
                    position: 'bottom-left',
                    duration: 4000,
                    style: {
                        background: 'rgba(22, 27, 46, 0.9)',
                        color: '#fff',
                        fontSize: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                    },
                    icon: '⚡'
                });
            }
        }, 12000); // Check every 12 seconds

        return () => clearInterval(interval);
    }, []);

    return null; // This component doesn't render anything visible directly
};

export default LiveNotifications;
