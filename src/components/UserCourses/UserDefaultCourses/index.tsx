import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import useDefaultCourses from "../../../hooks/useDefaultCourses";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import DataStateWrapper from "../../DataStateWrapperProps";
import UserDefaultCourseItem from "./UserDefaultCourseItem";
import styles from "./UserDefaultCourses.module.css";

type Props = {
    classID?: number;
};

function UserDefaultCourses({ classID }: Props) {
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useDefaultCourses(
        DATABASE_KEY,
        user?.userID as number
    );

    return (
        <div className={[styles.userDefaultCourses].join(" ")}>
            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg="No hemos podido recuperar los cursos."
            >
                {data?.map((d) => {
                    return (
                        classID !== d.curseID && (
                            <UserDefaultCourseItem key={d.curseID} data={d} />
                        )
                    );
                })}
            </DataStateWrapper>
        </div>
    );
}

export default UserDefaultCourses;
