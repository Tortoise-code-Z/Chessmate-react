import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BBDD } from "../types/types";

export default function useUserEmail(url: string, userID: number) {
    const queryFunction: () => Promise<string> = async () => {
        const response = await axios.get<BBDD>(url);
        const user = response.data.users.find((u) => u.userID === userID);
        return user?.email || "";
    };
    return useQuery({
        queryKey: ["userEmail", userID],
        queryFn: queryFunction,
    });
}
