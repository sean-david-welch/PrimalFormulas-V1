export const api_base_url = 'http://127.0.0.1:8000/api';

export const constructUrl = (endpoint: string, params?: string): string => {
    return params
        ? `${api_base_url}/${endpoint}/${params}`
        : `${api_base_url}/${endpoint}`;
};
