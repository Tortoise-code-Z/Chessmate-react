import { CourseJSON, IsObtainedCourse } from "../../types/types";
import ItemCourseDisplay from "./ItemCourseDisplay";
import styles from "./CoursesDisplay.module.css";
import SecurityRendering from "../SecurityRendering";
import { ReactNode, useState } from "react";
import WarningMsg from "../WarningMsg";
import ItemCourseDisplayDefault from "./ItemCourseDisplayDefault";
import MsgEmpty from "../MsgEmpty";

type Props = {
    action?: boolean;
    courses: (CourseJSON & IsObtainedCourse)[];
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
    const [warningCoursesMsg, setWarningCoursesMsg] = useState<string | null>(
        null
    );

    const className = [
        display === "Col"
            ? styles.coursesColumnDisplay
            : styles.coursesRowDisplay,
    ].join(" ");
    return (
        <>
            {warningCoursesMsg && <WarningMsg msg={warningCoursesMsg} />}
            <div className={className}>
                <SecurityRendering<CourseJSON & IsObtainedCourse>
                    data={courses}
                    conditions={courses?.map((c) => !!c?.curseID)}
                    noCriticalConditions={courses?.map(
                        (c) =>
                            !!c?.title &&
                            !!c?.shortDescription &&
                            !!c?.imageUrl.thumb &&
                            !!c?.level &&
                            !!c?.price
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
                    msg="Algún curso puede estar incompleto. Estamos trabajando para solucionarlo."
                    msgEmpty="No se han podido recuperar los cursos. Estamos trabajando en ellos para solucionarlo."
                >
                    {(course, index, canRender) => {
                        if (!canRender)
                            return (
                                <ItemCourseDisplayDefault
                                    courseID={course?.curseID}
                                    key={course?.curseID || index}
                                    action={action}
                                    data={course}
                                    display={display}
                                />
                            );
                        return (
                            <ItemCourseDisplay
                                courseID={course?.curseID}
                                key={course?.curseID || index}
                                action={action}
                                data={course}
                                display={display}
                            />
                        );
                    }}
                </SecurityRendering>
            </div>
        </>
    );
}

export default CoursesDisplay;
