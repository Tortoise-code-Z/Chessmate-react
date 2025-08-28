import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import styles from "./ThereArentCourses.module.css";
import { PATHS } from "../../../../../consts/paths";

type Props = {
    msg?: string;
};

/**
 * Component displayed when the user has no courses to show.
 *
 * - Shows a message indicating no courses are available.
 * - Provides a link button to navigate to the courses page.
 *
 * @param msg - Optional custom message to display. Defaults to "No tienes cursos aún...".
 * @returns A div containing the message and a navigation button to the courses page.
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
