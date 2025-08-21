import { ReactNode } from "react";
import UserCourses from "../UserCourses";
import styles from "./UserCoursesSection.module.css";

type Props = {
    children: ReactNode;
    defaultCourseClassID?: number;
    obtainedCourseClassID?: number;
    obtainedCoursesLimit?: number;
    showObtainedCourses?: boolean;
    showDefaultCourses?: boolean;
    navbarHeight?: boolean;
    msg?: string;
};

function UserCoursesSection({
    children,
    defaultCourseClassID,
    obtainedCourseClassID,
    obtainedCoursesLimit,
    showObtainedCourses = true,
    showDefaultCourses = true,
    navbarHeight = false,
    msg,
}: Props) {
    return (
        <section
            className={[
                styles.userCoursesSection,
                navbarHeight ? styles.paddingNavbar : "",
            ].join(" ")}
        >
            {children}
            <UserCourses
                defaultCourseClassID={defaultCourseClassID}
                obtainedCourseClassID={obtainedCourseClassID}
                obtainedCoursesLimit={obtainedCoursesLimit}
                showObtainedCourses={showObtainedCourses}
                showDefaultCourses={showDefaultCourses}
                msg={msg}
            />
        </section>
    );
}

export default UserCoursesSection;
