import { create } from "zustand";
import { UserAuth } from "../types/types";

type UserAuthStore = {
    user: UserAuth | null;
    setUser: (user: UserAuth | null) => void;
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;
};

/**
 * useUserAuthStore - Zustand store for managing authenticated user state.
 *
 * This store:
 * - Holds the current authenticated user (`user`) and a loading state (`isLoading`).
 * - Provides setter functions to update the user and loading state.
 *
 * State:
 * - `user`: The currently authenticated user or `null` if not logged in.
 * - `isLoading`: Boolean indicating if the user data is being loaded.
 *
 * Actions:
 * - `setUser(user: UserAuth | null)`: Sets the current authenticated user.
 * - `setIsLoading(state: boolean)`: Sets the loading state.
 */

export const useUserAuthStore = create<UserAuthStore>((set) => ({
    user: null,
    isLoading: false,
    setUser: (userData) => set({ user: userData }),
    setIsLoading: (state) => set({ isLoading: state }),
}));
