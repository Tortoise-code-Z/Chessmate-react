import { create } from "zustand";
import { UserAuth } from "../types/types";

type UserAuthStore = {
    user: UserAuth | null;
    setUser: (user: UserAuth | null) => void;
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;
};

export const useUserAuthStore = create<UserAuthStore>((set) => ({
    user: null,
    isLoading: false,
    setUser: (userData) => set({ user: userData }),
    setIsLoading: (state) => set({ isLoading: state }),
}));
