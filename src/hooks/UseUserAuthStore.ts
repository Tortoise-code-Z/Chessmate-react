import { create } from "zustand";
import { UserAuth } from "../types/types";

type UserAuthStore = {
    user: UserAuth | null;
    setUser: (user: UserAuth | null) => void;
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;
};

/**
 * Zustand store for user authentication state.
 *
 * - Holds the authenticated user information and loading state.
 * - Provides setter functions to update the user and loading status.
 *
 * @returns {
 *   user: UserAuth | null,
 *   setUser: (user: UserAuth | null) => void,
 *   isLoading: boolean,
 *   setIsLoading: (state: boolean) => void
 * }
 * Object containing the current user, loading state, and setters.
 */

export const useUserAuthStore = create<UserAuthStore>((set) => ({
    user: null,
    isLoading: false,
    setUser: (userData) => set({ user: userData }),
    setIsLoading: (state) => set({ isLoading: state }),
}));
