import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserById } from "../api";

export default function useUserEmail(key: string, userID: number) {
    const queryFunction: () => Promise<string> = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const user = getUserById(userID, data);

            return user?.email || "";
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    return useQuery({
        queryKey: ["userEmail", userID],
        queryFn: queryFunction,
    });
}
