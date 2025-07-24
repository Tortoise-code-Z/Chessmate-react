import { FaExclamationTriangle } from "react-icons/fa";
import { JSON_URL } from "../../../../consts/url";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import useUserDefaultCourses from "../../../../hooks/useUserDefaultCourses";
import { DefualtCourse } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import DataStateWrapper from "../../../DataStateWrapperProps";
import styles from "./UserDefaultCourseItem.module.css";
import { Link } from "react-router-dom";
import { paths } from "../../../../consts/paths";

type Props = {
    data: DefualtCourse;
};

function UserDefaultCourseItem({ data }: Props) {
    const { user } = useUserAuthStore();

    const {
        data: defaultCourses,
        isLoading,
        error,
    } = useUserDefaultCourses(JSON_URL, user?.userID as number);

    const image = getImage(data.imageUrl.general, ["defaultCourses"]);

    const userProgress = defaultCourses?.find(
        (df) => df.courseId === data.curseID
    )?.progress;

    const errorComponent = (
        <div className={[styles.errorElement].join(" ")}>
            <FaExclamationTriangle />{" "}
            <span>No hemos podido recuperar tu progreso.</span>
        </div>
    );

    return (
        <Link
            to={`/${paths.class.replace(":id", data.curseID.toString())}`}
            className={[styles.userDefaultCourseItem].join(" ")}
        >
            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorComponent={errorComponent}
            >
                {userProgress ? (
                    <div
                        className={[
                            styles.progress,
                            userProgress < 100
                                ? styles.bccInProgress
                                : styles.bccCompleted,
                        ].join(" ")}
                    >
                        <span>{userProgress}%</span>
                    </div>
                ) : (
                    ""
                )}
            </DataStateWrapper>
            <figure>
                <img
                    src={image}
                    alt={data.title}
                    title={data.title}
                    width={getImageSize(data.imageUrl.general, "width")}
                    height={getImageSize(data.imageUrl.general, "height")}
                />
            </figure>
            <p className={[styles.title].join(" ")}>{data.title}</p>
        </Link>
    );
}

export default UserDefaultCourseItem;
