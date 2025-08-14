import { NavLink } from "react-router-dom";
import { paths } from "../../../../consts/paths";
import { FaBook } from "react-icons/fa";
import styles from "./ThereArentCourses.module.css";

type Props = {};

function ThereArentCourses({}: Props) {
    return (
        <div className={[styles.msgNotCoursesYet].join(" ")}>
            <p>No tienes cursos aún...</p>
            <NavLink
                className={["button", "buttonPrimary"].join(" ")}
                to={`/${paths.courses}`}
            >
                <FaBook />
                Ir a cursos
            </NavLink>
        </div>
    );
}

export default ThereArentCourses;
