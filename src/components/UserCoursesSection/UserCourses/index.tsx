import styles from "./UserCourses.module.css";
import UserDefaultCourses from "./UserDefaultCourses";
import LightComponent from "../../LightComponent";
import TitleHx from "../../TitleHx";
import UserObtainedCourses from "./UserObtainedCourses";
import { useState } from "react";
import WarningMsg from "../../WarningMsg";
import { WarningMsgType } from "../../../types/types";

type Props = {
    obtainedCoursesLimit?: number;
    showObtainedCourses?: boolean;
    showDefaultCourses?: boolean;
    msg?: string;
};

/**
 * UserCourses - React component that displays the user's courses, both free and obtained.
 *
 * Features:
 * - Adds a decorative light component in the section.
 * - Optionally displays free ("Gratuitos") courses and/or obtained ("Adquiridos") courses.
 * - Shows warning messages for empty or incomplete course data using `WarningMsg`.
 * - Delegates rendering of course lists to `UserDefaultCourses` and `UserObtainedCourses` components.
 *
 * Props:
 * - `obtainedCoursesLimit` (optional): Maximum number of obtained courses to display.
 * - `showObtainedCourses` (optional, default: true): Whether to render obtained courses section.
 * - `showDefaultCourses` (optional, default: true): Whether to render default/free courses section.
 * - `msg` (optional): Custom message for the obtained courses section if empty.
 *
 * @returns JSX.Element: Section with optional default and obtained courses, including warning messages.
 */

function UserCourses({
    obtainedCoursesLimit,
    showObtainedCourses = true,
    showDefaultCourses = true,
    msg,
}: Props) {
    const [defaultWarning, setDefaultWarning] = useState<WarningMsgType | null>(
        null
    );
    const [courseWarning, setCourseWarning] = useState<WarningMsgType | null>(
        null
    );

    return (
        <div className={styles.userCourses}>
            <LightComponent top={50} right={30} />
            {showDefaultCourses && (
                <div className={styles.userDefaultCoursesContainer}>
                    <TitleHx level={3}>Gratuitos</TitleHx>

                    {(defaultWarning?.emptyMsg || defaultWarning?.msg) && (
                        <WarningMsg
                            msg={
                                defaultWarning?.emptyMsg
                                    ? defaultWarning.emptyMsg
                                    : defaultWarning.msg
                            }
                        />
                    )}
                    <UserDefaultCourses
                        setDefaultWarning={setDefaultWarning}
                        defaultWarning={defaultWarning}
                    />
                </div>
            )}

            {showObtainedCourses && (
                <div className={styles.userObtainedCoursesContainer}>
                    <TitleHx level={3}>Adquiridos</TitleHx>
                    {(courseWarning?.emptyMsg || courseWarning?.msg) && (
                        <WarningMsg
                            msg={
                                courseWarning?.emptyMsg
                                    ? courseWarning.emptyMsg
                                    : courseWarning.msg
                            }
                        />
                    )}
                    <UserObtainedCourses
                        setCourseWarning={setCourseWarning}
                        courseWarning={courseWarning}
                        obtainedCoursesLimit={obtainedCoursesLimit}
                        msg={msg}
                    />
                </div>
            )}
        </div>
    );
}

export default UserCourses;
