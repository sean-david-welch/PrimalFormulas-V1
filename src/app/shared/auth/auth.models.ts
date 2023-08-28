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
