import { useQuery } from "@tanstack/react-query";
import { BestChessPlayers, BestPlayerChessData } from "../types/types";
import axios from "axios";

/**
 * useBestPlayersApi - Custom React hook for fetching the top chess players from an API.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch data from the provided API URL.
 * - Retrieves the top 5 live blitz players from the response.
 * - Caches the data for 10 minutes to reduce unnecessary network requests.
 *
 * @param url - The API endpoint URL to fetch the chess players data from.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing an array of the top 5 chess players.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and stale-time management.
 */

export default function useBestPlayersApi(url: string) {
    const queryFunction: () => Promise<BestPlayerChessData[]> = async () => {
        try {
            const response = await axios.get<BestChessPlayers>(url);
            const players = response.data.live_blitz.slice(0, 5);
            return players;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["bestPlayers"],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 10,
    });
}
