import { useParams } from "react-router-dom";
import UserDefaultCourseItem from "./UserDefaultCourseItem";
import styles from "./UserDefaultCourses.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import useDefaultCourses from "../../../../hooks/useDefaultCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import DataStateWrapper from "../../../DataStateWrapperProps";

type Props = {};

function UserDefaultCourses({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useDefaultCourses(
        DATABASE_KEY,
        user?.userID as number,
        Number(params.id)
    );

    return (
        <div className={[styles.userDefaultCourses].join(" ")}>
            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg="No hemos podido recuperar los cursos."
            >
                {data?.map((d) => {
                    return <UserDefaultCourseItem key={d.curseID} data={d} />;
                })}
            </DataStateWrapper>
        </div>
    );
}

export default UserDefaultCourses;
