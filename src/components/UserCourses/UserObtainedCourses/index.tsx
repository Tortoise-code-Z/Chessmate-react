import { JSON_URL } from "../../../consts/url";
import useObtainedCourses from "../../../hooks/useObtainedCourses";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import DataStateWrapper from "../../DataStateWrapperProps";
import styles from "./UserObtainedCourses.module.css";
import UserObtainedCoursesItem from "./UserObtainedCoursesItem";

type Props = {
    classID?: number;
};

function UserObtainedCourses({ classID }: Props) {
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useObtainedCourses(
        JSON_URL,
        user?.userID as number
    );

    return (
        <DataStateWrapper isLoading={isLoading} error={error}>
            <div className={[styles.userObtainedCourses].join(" ")}>
                {data?.map(
                    (d) =>
                        classID !== d.curseID && (
                            <UserObtainedCoursesItem key={d.curseID} data={d} />
                        )
                )}
            </div>
        </DataStateWrapper>
    );
}

export default UserObtainedCourses;
