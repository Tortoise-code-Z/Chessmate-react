import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import styles from "./ThereArentCourses.module.css";
import { PATHS } from "../../../../../consts/paths";

type Props = {
    msg?: string;
};

/**
 * ThereArentCourses - React component that displays a message when the user has no courses.
 *
 * Features:
 * - Shows a customizable message indicating no courses are obtained.
 * - Provides a navigation link to the courses page using `NavLink` and `FaBook` icon.
 * - Styled with CSS modules for consistent layout and appearance.
 *
 * Props:
 * - `msg` (optional): Custom message to display. Defaults to "No tienes cursos aún...".
 *
 * @returns JSX.Element: A message card with a link to navigate to the courses page.
 */

function ThereArentCourses({ msg = "No tienes cursos aún..." }: Props) {
    return (
        <div className={styles.msgNotCoursesYet}>
            <p>{msg}</p>
            <NavLink
                className={["button", "buttonPrimary"].join(" ")}
                to={`/${PATHS.courses}`}
            >
                <FaBook />
                Ir a cursos
            </NavLink>
        </div>
    );
}

export default ThereArentCourses;
