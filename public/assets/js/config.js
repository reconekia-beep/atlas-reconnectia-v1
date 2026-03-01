tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ff751f",
                "background-light": "#f8f6f5",
                "background-dark": "#202124",
                "accent-blue": "#0ea5e9",
                "neutral-dark": "#202124",
            },
            fontFamily: {
                "display": ["Inter", "Poppins", "sans-serif"]
            },
            animation: {
                'soft-pulse': 'soft-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 8s ease-in-out infinite',
            },
            keyframes: {
                'soft-pulse': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.9, transform: 'scale(1.02)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
}
