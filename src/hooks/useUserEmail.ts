import { useQuery } from "@tanstack/react-query";
import { BBDD } from "../types/types";

export default function useUserEmail(key: string, userID: number) {
    const queryFunction: () => Promise<string> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);
            const user = data.users.find((u) => u.userID === userID);
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
