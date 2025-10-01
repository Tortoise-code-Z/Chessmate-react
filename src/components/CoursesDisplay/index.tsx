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
 * CoursesDisplay - Component to render a list of courses in either row or column layout.
 *
 * Features:
 * - Uses `SecurityRendering` to validate course data before rendering.
 * - Shows a `WarningMsg` if any course data is incomplete.
 * - Supports empty states with `MsgEmpty`.
 * - Optionally allows actions on courses (`action` prop).
 * - Dynamically chooses between row or column layout (`display` prop).
 *
 * Props:
 * - `courses`: Array of courses with optional obtained state.
 * - `action`: Optional boolean to enable course actions (like purchase or view).
 * - `display`: "Row" | "Col" layout for rendering courses.
 * - `msg`: Optional message to display in the empty state.
 * - `svg`: Optional SVG or ReactNode to display when empty.
 *
 * @returns JSX element: A container displaying a validated list of courses with proper warnings or empty states.
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
                    conditions={courses?.map((c) => isNumber(c?.courseID))}
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
                                courseID={asNumber(course?.courseID)}
                                key={asNumber(course?.courseID) || index}
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
