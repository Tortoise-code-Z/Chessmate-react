import { useQuery } from "@tanstack/react-query";
import { BestChessPlayers, BestPlayerChessData } from "../types/types";
import axios from "axios";

export default function useBestPlayersApi(url: string) {
    const queryFunction: () => Promise<BestPlayerChessData[]> = async () => {
        const response = await axios.get<BestChessPlayers>(url);
        const players = response.data.live_blitz.slice(0, 5);
        return players;
    };

    return useQuery({
        queryKey: ["bestPlayers"],
        queryFn: queryFunction,
    });
}
