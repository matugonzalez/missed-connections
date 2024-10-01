/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,jsx}" ], 
    theme: { 
        extend: {
            screens: {
                'sm': '425px',
                // => @media (min-width: 640px) { ... }
        
                'md': '768px',
                // => @media (min-width: 768px) { ... }
        
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
        
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
        
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            keyframes: {
                wiggle: {
                  '0%, 100%': { transform: 'rotate(-3deg)' },
                  '50%': { transform: 'rotate(3deg)' },
                },
                shake: {
                    '0%, 100%': {transform: 'translateX(0)' },
                    '25%' : {transform: 'translateX(-5px)' }, 
                    '50%' : {transform: 'translateX(5px)' },
                    '75%' : {transform: 'translateX(-5px)' },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out 1s',
                shake: 'shake 0.5s ease'
            }
        }, 
    }, 
    safelist: [ { pattern: /(bg|text)-.*-./, } ], 
    darkMode: "class", 
    plugins: [], 
}