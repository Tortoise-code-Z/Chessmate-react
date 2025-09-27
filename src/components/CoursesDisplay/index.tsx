import {
    CourseJSON,
    IsObtainedCourse,
    Level,
    WarningMsgType,
} from "../../types/types";
import ItemCourseDisplay from "./ItemCourseDisplay";
import styles from "./CoursesDisplay.module.css";
import SecurityRendering from "../SecurityRendering";
import { ReactNode, useState } from "react";
import WarningMsg from "../WarningMsg";
import MsgEmpty from "../MsgEmpty";
import {
    asNumber,
    isNumber,
    isOnValues,
    isString,
    regExpCheck,
} from "../../utils/general";
import { IMAGES_PATH_RE, LEVELS } from "../../consts/general";

type Props = {
    action?: boolean;
    courses: (CourseJSON & Partial<IsObtainedCourse>)[] | undefined;
    display?: "Row" | "Col";
    msg?: string;
    svg?: ReactNode;
};

/**
 * CoursesDisplay - Component to render a list of courses.
 *
 * Displays each course using the ItemCourseDisplay component.
 * Can render in column or row layout.
 *
 * @param courses - Array of courses to display. Each course may include an `isObtained` flag.
 * @param action - Optional boolean to indicate if actions (like buttons) should be shown for each course.
 * @param display - Optional layout type: "Row" or "Col". Defaults to "Col".
 */

function CoursesDisplay({ courses, action, display = "Col", msg, svg }: Props) {
    const [warningCoursesMsg, setWarningCoursesMsg] =
        useState<WarningMsgType | null>(null);

    const className = [
        display === "Col"
            ? styles.coursesColumnDisplay
            : styles.coursesRowDisplay,
    ].join(" ");

    return (
        <>
            {(warningCoursesMsg?.emptyMsg || warningCoursesMsg?.msg) && (
                <WarningMsg
                    msg={
                        warningCoursesMsg?.emptyMsg
                            ? warningCoursesMsg.emptyMsg
                            : warningCoursesMsg.msg
                    }
                />
            )}

            <div className={className}>
                <SecurityRendering<CourseJSON & IsObtainedCourse>
                    data={courses}
                    conditions={courses?.map((c) => isNumber(c?.curseID))}
                    noCriticalConditions={courses?.map(
                        (c) =>
                            isString(c?.title) &&
                            isString(c?.shortDescription) &&
                            !!regExpCheck(c?.imageUrl?.thumb, IMAGES_PATH_RE) &&
                            !!isOnValues<Level>(c?.level, LEVELS) &&
                            isNumber(c?.price)
                    )}
                    emptyNode={
                        <MsgEmpty
                            msg={msg ? msg : "No hay cursos para mostrar."}
                            svg={svg ? svg : undefined}
                        />
                    }
                    state={{
                        setWarningState: setWarningCoursesMsg,
                        warningState: warningCoursesMsg,
                    }}
                    msg="Algún curso o datos de este puede estar incompleto. Estamos trabajando para solucionarlo."
                    msgEmpty="No se han podido recuperar los cursos. Estamos trabajando en ellos para solucionarlo."
                >
                    {(course, index, canRender) => {
                        return (
                            <ItemCourseDisplay
                                courseID={asNumber(course.curseID)}
                                key={asNumber(course.curseID) || index}
                                action={action}
                                data={course}
                                display={display}
                                canNavigate={canRender}
                            />
                        );
                    }}
                </SecurityRendering>
            </div>
        </>
    );
}

export default CoursesDisplay;
