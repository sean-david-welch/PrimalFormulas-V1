export interface AuthStatus {
    is_authenticated: boolean;
}

export interface AuthResponse {
    access_token: string;
    token_type: string;
}

export interface Credentials {
    username: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    full_name: string;
    disabled: boolean;
    is_superuser: boolean;
}
