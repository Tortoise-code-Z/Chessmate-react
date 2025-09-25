import { ReactNode } from "react";
import UserCourses from "./UserCourses";
import styles from "./UserCoursesSection.module.css";
import { AnimatedInView } from "../AnimatedInView";

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

/**
 * Section component that displays a user's courses along with any additional content.
 *
 * - Renders custom children passed to the section.
 * - Displays the `UserCourses` component with optional configuration:
 *   - Limits for obtained courses.
 *   - Toggles for showing obtained or default courses.
 *   - Optional message.
 * - Optionally applies extra padding if a navbar is present.
 *
 * Props:
 * - `children` → React nodes to display above the user courses.
 * - `obtainedCoursesLimit` → Optional. Maximum number of obtained courses to show.
 * - `showObtainedCourses` → Optional. Whether to display obtained courses. Defaults to true.
 * - `showDefaultCourses` → Optional. Whether to display default courses. Defaults to true.
 * - `navbarHeight` → Optional. Adds extra padding for navbar. Defaults to false.
 * - `msg` → Optional message to display above the courses.
 *
 * @returns A section containing the user courses and any additional children content.
 */

function UserCoursesSection({
    children,
    obtainedCoursesLimit,
    showObtainedCourses = true,
    showDefaultCourses = true,
    navbarHeight = false,
    msg,
}: Props) {
    return (
        <AnimatedInView>
            <section
                className={[
                    styles.userCoursesSection,
                    navbarHeight ? styles.paddingNavbar : "",
                ].join(" ")}
            >
                {children}
                <UserCourses
                    obtainedCoursesLimit={obtainedCoursesLimit}
                    showObtainedCourses={showObtainedCourses}
                    showDefaultCourses={showDefaultCourses}
                    msg={msg}
                />
            </section>
        </AnimatedInView>
    );
}

export default UserCoursesSection;
