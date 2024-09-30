/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,jsx}" ], 
    theme: { extend: {
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
        }
    }, }, 
    safelist: [ { pattern: /(bg|text)-.*-./, } ], 
    darkMode: "class", plugins: [], 
}