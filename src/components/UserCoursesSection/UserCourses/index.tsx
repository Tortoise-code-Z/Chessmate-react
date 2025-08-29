import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import LightComponent from "../../LightComponent";
import TitleHx from "../../TitleHx";
import UserObtainedCourses from "./UserObtainedCourses";
import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

type Props = {
    obtainedCoursesLimit?: number;
    showObtainedCourses?: boolean;
    showDefaultCourses?: boolean;
    msg?: string;
};

/**
 * Component that displays a user's courses, separated into default (free) and obtained courses.
 *
 * - Renders a decorative `LightComponent` for visual effect.
 * - Conditionally displays default courses with the `UserDefaultCourses` component.
 * - Conditionally displays obtained courses with the `UserObtainedCourses` component,
 *   optionally limiting the number shown and displaying a message.
 * - Uses `TitleHx` to display section headings for "Gratuitos" and "Adquiridos".
 *
 * Props:
 * - `obtainedCoursesLimit` → Optional. Maximum number of obtained courses to display.
 * - `showObtainedCourses` → Optional. Whether to show the obtained courses section. Defaults to true.
 * - `showDefaultCourses` → Optional. Whether to show the default courses section. Defaults to true.
 * - `msg` → Optional message to display above obtained courses.
 *
 * @returns A container div displaying the user's courses with optional decorative and heading elements.
 */

function UserCourses({
    obtainedCoursesLimit,
    showObtainedCourses = true,
    showDefaultCourses = true,
    msg,
}: Props) {
    const [defaultWarning, setDefaultWarning] = useState<boolean>(false);

    return (
        <div className={styles.userCourses}>
            <LightComponent top={50} right={30} />
            {showDefaultCourses && (
                <div className={styles.userDefaultCoursesContainer}>
                    {defaultWarning && (
                        <>
                            <div
                                style={{
                                    width: "100%",
                                    padding: "10px 20px",
                                    backgroundColor: "#f7b90faf",
                                    borderRadius: "5px",
                                    display: "flex",
                                    gap: "10px",
                                    fontFamily: "Roboto-light-italic",
                                }}
                            >
                                <FaExclamationTriangle />
                                <p>
                                    No se han podido renderizar algunos cursos.
                                </p>
                            </div>
                        </>
                    )}

                    <TitleHx level={3}>Gratuitos</TitleHx>
                    <UserDefaultCourses
                        setDefaultWarning={setDefaultWarning}
                        defaultWarning={defaultWarning}
                    />
                </div>
            )}

            {showObtainedCourses && (
                <div className={styles.userObtainedCoursesContainer}>
                    <TitleHx level={3}>Adquiridos</TitleHx>
                    <UserObtainedCourses
                        obtainedCoursesLimit={obtainedCoursesLimit}
                        msg={msg}
                    />
                </div>
            )}
        </div>
    );
}

export default UserCourses;
