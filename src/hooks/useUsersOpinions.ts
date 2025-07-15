import { useQuery } from "@tanstack/react-query";
import { BBDD, Opinion, User } from "../types/types";
import axios from "axios";

export default function useBestSeller(url: string) {
    const queryFunction: () => Promise<Opinion[]> = async () => {
        const response = await axios.get<BBDD>(url);
        const opinions = response.data.opinions;
        const filteredOpinions = opinions.slice(0, 4).map((o) => {
            const user = response.data.users.find((u) => u.userID === o.idUser);
            const { idUser, ...rest } = o;

            return { ...rest, user: user ?? ({} as User) };
        });

        return filteredOpinions;
    };

    return useQuery({
        queryKey: ["usersOpinions"],
        queryFn: queryFunction,
    });
}
