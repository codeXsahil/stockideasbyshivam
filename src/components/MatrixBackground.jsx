import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Matrix Configuration
        const symbols = "01010101$£€₹%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const fontSize = 14;
        const columns = Math.ceil(canvas.width / fontSize);

        // Array to track y-coordinate of each column
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random positions above screen
        }

        const draw = () => {
            // Semi-transparent black fill to create fade trail effect
            ctx.fillStyle = 'rgba(11, 15, 25, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Green text
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = symbols.charAt(Math.floor(Math.random() * symbols.length));

                // Varied colors for "Trading" feel (mostly green, some bright)
                const isBright = Math.random() > 0.95;
                ctx.fillStyle = isBright ? '#22c55e' : '#15803d'; // Tailwind green-500 vs green-700

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly or when it goes off screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        />
    );
};

export default MatrixBackground;
