import { create } from "zustand";
import { UserAuth } from "../types/types";

type UserStore = {
    user: UserAuth;
};

const useAuth = create<UserAuth>();
