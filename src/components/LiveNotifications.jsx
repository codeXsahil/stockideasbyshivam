import { useEffect } from 'react';
import toast from 'react-hot-toast';

const names = [
    // Indian Names
    "Rahul", "Amit", "Priya", "Vikram", "Sneha", "Rohan", "Ankit", "Pooja", "Suresh", "Meera",
    "Karan", "Simran", "Arjun", "Neha", "Raj", "Deepak", "Sanjay", "Varun", "Kavya", "Ishaan",
    "Riya", "Aarav", "Ananya", "Aditya", "Nisha", "Manish", "Kajal", "Vivek", "Tanvi", "Aryan",
    "Shreya", "Rakesh", "Swati", "Nikhil", "Bhavya", "Chetan", "Esha", "Gaurav", "Divya", "Harsh",
    "Jhanvi", "Kunal", "Lavanya", "Mohit", "Naina", "Omkar", "Prachi", "Rishi", "Sakshi", "Tushar",
    // Foreign Names
    "John", "Sarah", "Mike", "Emily", "David", "Jessica", "Alex", "Sophia", "Daniel", "Emma",
    "Chris", "Olivia", "James", "Isabella", "Robert", "Mia", "William", "Charlotte", "Joseph", "Amelia"
];
const actions = ["joined the Free Channel", "just watched the analysis", "subscribed to the channel"];

const LiveNotifications = () => {
    useEffect(() => {
        let timeoutId;

        const showRandomToast = () => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];

            toast(`${randomName} ${randomAction} 🚀`, {
                position: 'bottom-left',
                duration: 2500, // Slightly shorter duration to prevent stacking too much
                style: {
                    background: 'rgba(22, 27, 46, 0.9)',
                    color: '#fff',
                    fontSize: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                },
                icon: '⚡'
            });

            // Random delay between 500ms (0.5s) and 3000ms (3s)
            const randomDelay = Math.floor(Math.random() * (3000 - 500 + 1)) + 500;
            timeoutId = setTimeout(showRandomToast, randomDelay);
        };

        // Start the loop
        timeoutId = setTimeout(showRandomToast, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return null;
};

export default LiveNotifications;
