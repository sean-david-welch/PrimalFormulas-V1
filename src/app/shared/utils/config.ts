export const api_base_url = 'http://127.0.0.1:8000/api';

export const constructUrl = (endpoint: string, params?: string): string => {
    return params
        ? `${api_base_url}/${endpoint}/${params}`
        : `${api_base_url}/${endpoint}`;
};

export const stripe_publishable_key_test =
    'pk_test_51MXR40LQKZpRvvuEz5IWRCdRssn1c3pOCIwXRYqky1GhyiiCyiuwBjAXJ4IHTMGblLCyuaXlv3SCPtwtDM1iv8OV00EoL8GlJq';

export const stripe_publishable_key =
    'pk_live_51MXR40LQKZpRvvuEKHnau9yl5OSHE5DWafkXCX7mfekFxpWgCfn2lwwT9fGgQ4PRMUwq7XqvPhVqaQVj1FOIAIGz004V3UQxxe';
