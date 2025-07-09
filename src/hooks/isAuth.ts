import { useQuery } from "@tanstack/react-query";
import { UserAuth } from "../types/types";

type UserStore = {
    user: UserAuth;
};

const queryFunction = ()=>

const query = useQuery({
    queryKey: ["user"],
    queryFn: 
});
