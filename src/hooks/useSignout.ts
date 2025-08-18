import { useMutation } from "@tanstack/react-query";
import { USER_AUTH_KEY } from "../consts/dataBaseKey";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useNavigate } from "react-router-dom";
import { paths } from "../consts/paths";
import { removeItemLocalStorage } from "../api";

export function useSignout() {
    const { setUser } = useUserAuthStore();
    const navigate = useNavigate();

    const login = async (): Promise<void> => {
        try {
            removeItemLocalStorage(USER_AUTH_KEY);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            setUser(null);
            navigate(`${paths.index}`);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
