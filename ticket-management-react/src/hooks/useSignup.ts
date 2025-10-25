import { useState } from "react";
import { instance } from "../axios/axiosInstance";

interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface SignupResponse {
    token: string;
    message?: string;
    statusCode: number;
}

export const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const signup = async (data: SignupData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await instance.post<SignupResponse>("/signup", data)
            setSuccess(true);
            setLoading(false);
            localStorage.setItem("ticketapp_session", response.data.token);
            return response.data;
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Signup failed. Please try again.';
            setError(errorMessage);
            console.error("Signup error:", err);
            setLoading(false);
            throw err;
        }
    }
    const reset = () => {
        setError(null);
        setSuccess(false);
    };

    return { signup, loading, error, success, reset };
};
