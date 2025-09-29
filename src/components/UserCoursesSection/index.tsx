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
 * UserCoursesSection - React component that displays a user's courses section.
 *
 * Features:
 * - Wraps content in an animated container via `AnimatedInView`.
 * - Optionally adds top padding for the navbar.
 * - Renders child elements before the list of user courses.
 * - Configurable to show default courses, obtained courses, and a limit on obtained courses.
 * - Supports a custom message for empty or restricted course lists.
 *
 * Props:
 * - `children`: ReactNode(s) to render above the course list (e.g., section title).
 * - `defaultCourseClassID` (optional): ID to filter default courses.
 * - `obtainedCourseClassID` (optional): ID to filter obtained courses.
 * - `obtainedCoursesLimit` (optional): Maximum number of obtained courses to display.
 * - `showObtainedCourses` (optional, default: true): Whether to display obtained courses.
 * - `showDefaultCourses` (optional, default: true): Whether to display default courses.
 * - `navbarHeight` (optional, default: false): Adds top padding if true to accommodate a fixed navbar.
 * - `msg` (optional): Custom message to display if no courses are available.
 *
 * @returns JSX.Element: Animated section containing child elements and user courses.
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
