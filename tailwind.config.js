module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Ember Progression
        primary: {
          DEFAULT: "#E97435", // orange-600
          50: "#FEF3E2", // orange-50
          100: "#FDE68A", // orange-100
          200: "#FCD34D", // orange-200
          300: "#FBBF24", // orange-300
          400: "#F59E0B", // orange-400
          500: "#F39C12", // orange-500
          600: "#E97435", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        
        // Secondary Colors - Professional Depth
        secondary: {
          DEFAULT: "#2C3E50", // slate-800
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#2C3E50", // slate-800
          900: "#0F172A", // slate-900
        },

        // Accent Colors - Milestone Celebrations
        accent: {
          DEFAULT: "#F39C12", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F39C12", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
        },

        // Background Colors
        background: "#FAFBFC", // gray-50
        surface: "#F8F9FA", // gray-100

        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#6C757D", // gray-500
        },

        // Status Colors
        success: {
          DEFAULT: "#27AE60", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
          600: "#27AE60", // green-600
          700: "#15803D", // green-700
        },

        warning: {
          DEFAULT: "#F39C12", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F39C12", // amber-500
          600: "#D97706", // amber-600
        },

        error: {
          DEFAULT: "#E74C3C", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#E74C3C", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
        },

        // Border Colors
        border: {
          DEFAULT: "#E9ECEF", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },

      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },

      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },

      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },

      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}