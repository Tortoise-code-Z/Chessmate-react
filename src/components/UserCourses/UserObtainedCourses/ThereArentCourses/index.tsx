import { NavLink } from "react-router-dom";
import { paths } from "../../../../consts/paths";
import { FaBook } from "react-icons/fa";
import styles from "./ThereArentCourses.module.css";

type Props = {
    msg?: string;
};

function ThereArentCourses({ msg = "No tienes cursos aún..." }: Props) {
    console.log(msg);
    return (
        <div className={[styles.msgNotCoursesYet].join(" ")}>
            <p>{msg}</p>
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
