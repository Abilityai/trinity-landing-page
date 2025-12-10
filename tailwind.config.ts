import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          light: '#FFE6E6',
          dark: '#CC0000',
        },
        secondary: {
          DEFAULT: '#363B45',
          light: '#EAEBED',
          dark: '#2A2E36',
          xlight: '#eef2ff',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        background: {
          DEFAULT: '#F0F0F0',
          alt: '#FAFAFA',
        },
        card: 'rgba(252, 252, 251, 0.70)',
        border: {
          DEFAULT: '#E6E6EB',
          light: '#e5e7eb',
        },
        success: {
          DEFAULT: '#22c55e',
          light: '#dcfce7',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fee2e2',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#FFF7E5',
        },
        info: {
          DEFAULT: '#3b82f6',
          light: '#e0f2fe',
        },
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '10px',
        lg: '20px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        md: '0px 2px 14px rgba(0, 0, 0, 0.05)',
        lg: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
