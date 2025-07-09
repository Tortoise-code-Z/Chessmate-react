import { useQuery } from "@tanstack/react-query";
import { useUserAuthStore } from "./UseUserAuthStore";
import { UserAuth } from "../types/types";
import { useEffect } from "react";

export default function useUserAuth() {
    const { user, setUser, setIsLoading } = useUserAuthStore();

    const queryFunction = async (): Promise<UserAuth | null> => {
        const stored = localStorage.getItem("userAuth");
        if (!stored) return null;

        try {
            return JSON.parse(stored) as UserAuth;
        } catch {
            return null;
        }
    };

    const query = useQuery<UserAuth | null>({
        queryKey: ["userAuth"],
        queryFn: queryFunction,
    });

    // Una vez se ejecute con exito la query, se manda la data a user y se establece un loading para evitar parpadeos
    useEffect(() => {
        if (query.isLoading) {
            setIsLoading(true);
        } else {
            if (query.isSuccess) {
                setIsLoading(false);
                setUser(query.data);
            }
        }
    }, [query.isSuccess, query.data]);

    // Conexion entre pestañas
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === "userAuth") {
                query.refetch();
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return { user, query };
}
