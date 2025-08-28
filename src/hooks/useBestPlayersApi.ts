import { useQuery } from "@tanstack/react-query";
import { BestChessPlayers, BestPlayerChessData } from "../types/types";
import axios from "axios";

/**
 * Hook that fetches the best Chess.com players using React Query.
 *
 * - Performs a GET request to the provided URL.
 * - Filters the top 5 players from the `live_blitz` category.
 * - Automatically handles cache and loading/error state through React Query.
 *
 * @param url URL of the Chess.com API endpoint to fetch.
 * @returns Object with player data and React Query states: `{ data, isLoading, error, ... }`.
 */

export default function useBestPlayersApi(url: string) {
    const queryFunction: () => Promise<BestPlayerChessData[]> = async () => {
        const response = await axios.get<BestChessPlayers>(url);
        const players = response.data.live_blitz.slice(0, 5);
        return players;
    };

    return useQuery({
        queryKey: ["bestPlayers"],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 10,
    });
}
