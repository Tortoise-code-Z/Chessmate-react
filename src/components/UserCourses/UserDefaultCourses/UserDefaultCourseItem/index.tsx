import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import useUserDefaultCourses from "../../../../hooks/useUserDefaultCourses";
import { DefualtCourse } from "../../../../types/types";
import styles from "./UserDefaultCourseItem.module.css";
import { Link } from "react-router-dom";
import { paths } from "../../../../consts/paths";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import UserProgress from "../UserProgress";
import DefaultCourseImage from "../DefaultCourseImage";

type Props = {
    data: DefualtCourse;
};

function UserDefaultCourseItem({ data }: Props) {
    const { user } = useUserAuthStore();

    const {
        data: defaultCourses,
        isLoading,
        error,
    } = useUserDefaultCourses(DATABASE_KEY, user?.userID as number);

    const userProgress = defaultCourses?.find(
        (df) => df.courseId === data.curseID
    )?.progress;

    return (
        <Link
            to={`/${paths.class.replace(":id", data.curseID.toString())}`}
            className={[styles.userDefaultCourseItem].join(" ")}
        >
            <UserProgress
                isLoading={isLoading}
                error={error}
                userProgress={userProgress}
            />
            <DefaultCourseImage data={data} />
            <p className={[styles.title].join(" ")}>{data.title}</p>
        </Link>
    );
}

export default UserDefaultCourseItem;
