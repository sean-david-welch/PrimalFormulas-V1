export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

let FRONTEND_BASE_URL: string;

if (import.meta.env.MODE === 'production') {
    FRONTEND_BASE_URL = import.meta.env.VITE_PRODUCTION_BASE_URL;
    console.log(
        'Production mode',
        'Base URL:',
        FRONTEND_BASE_URL,
        'API URL:',
        API_BASE_URL
    );
} else {
    FRONTEND_BASE_URL =
        import.meta.env.VITE_FRONTEND_BASE_URL ||
        import.meta.env.VITE_FRONTEND_BASE_FALLBACK_URL;
    console.log(
        'Development mode',
        'Base URL:',
        FRONTEND_BASE_URL,
        'API URL:',
        API_BASE_URL
    );
}

export { FRONTEND_BASE_URL };
