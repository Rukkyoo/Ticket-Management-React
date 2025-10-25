import { useState } from "react";
import { instance } from "../axios/axiosInstance";

interface LoginData {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    message?: string;
    statusCode: number;
}

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const login = async (data: LoginData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await instance.post<LoginResponse>("/login", data)
            setSuccess(true);
            setLoading(false);
            localStorage.setItem("ticketapp_session", response.data.token);
            return response.data.token;
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
            setError(errorMessage);
            console.error("Login error:", err);
            setLoading(false);
            throw err;
        }
    }
    const reset = () => {
        setError(null);
        setSuccess(false);
    };

    return { login, loading, error, success, reset };
};
