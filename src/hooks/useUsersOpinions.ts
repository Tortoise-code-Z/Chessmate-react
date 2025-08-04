import { useQuery } from "@tanstack/react-query";
import { BBDD, Opinion, User } from "../types/types";

export default function useUsersOpinions(key: string) {
    const queryFunction: () => Promise<Opinion[]> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);
            const opinions = data.opinions;
            const filteredOpinions = opinions.slice(0, 4).map((o) => {
                const user = data.users.find((u) => u.userID === o.idUser);
                const { idUser, ...rest } = o;

                return { ...rest, user: user ?? ({} as User) };
            });

            return filteredOpinions;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["usersOpinions"],
        queryFn: queryFunction,
    });
}
