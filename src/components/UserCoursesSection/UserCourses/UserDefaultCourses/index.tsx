import { useParams } from "react-router-dom";
import UserDefaultCourseItem from "./UserDefaultCourseItem";
import styles from "./UserDefaultCourses.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import useDefaultCourses from "../../../../hooks/useDefaultCourses";
import { DATABASE_KEY } from "../../../../consts/dataBaseKey";
import DataStateWrapper from "../../../DataStateWrapperProps";
import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
    setDefaultWarning: Dispatch<SetStateAction<boolean>>;
    defaultWarning: boolean;
};

/**
 * Component that displays the default (free) courses for a user.
 *
 * - Uses `useParams` to retrieve route parameters, such as the current course ID.
 * - Retrieves the authenticated user via `useUserAuthStore`.
 * - Fetches default courses for the user with `useDefaultCourses`.
 * - Wraps the course list in `DataStateWrapper` to handle loading and error states.
 * - Renders each course with `UserDefaultCourseItem`.
 *
 * Props:
 * - None.
 *
 * @returns A container div displaying the user's default courses with loading and error handling.
 */

function UserDefaultCourses({ setDefaultWarning, defaultWarning }: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const {
        data: defaultCourses,
        isLoading,
        error,
    } = useDefaultCourses(
        DATABASE_KEY,
        user?.userID as number,
        Number(params.id)
    );

    const mapping = defaultCourses?.map((defaultCourse, i) => {
        const canRender =
            !!defaultCourse &&
            !!defaultCourse.curseID &&
            !!defaultCourse.content.themes &&
            (!!defaultCourse.title || !!defaultCourse.imageUrl.general);

        if (defaultCourse && canRender) {
            return (
                <UserDefaultCourseItem
                    key={defaultCourse?.curseID ?? i}
                    data={defaultCourse}
                />
            );
        }

        return null;
    });

    useEffect(() => {
        const areaNullable = defaultCourses?.some(
            (course) =>
                !course ||
                !course.curseID ||
                !course.content?.themes ||
                (!course.title && !course.imageUrl?.general)
        );

        setDefaultWarning(!!areaNullable);
    }, [defaultCourses, defaultWarning]);

    return (
        <div className={[styles.userDefaultCourses].join(" ")}>
            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg="No hemos podido recuperar los cursos."
            >
                {mapping}
            </DataStateWrapper>
        </div>
    );
}

export default UserDefaultCourses;
