import { coursesDataItem } from "../../consts/home";
import ItemCourseData from "../ItemCourseData";

type Props = {};

function CoursesDataSection({}: Props) {
    return (
        <section>
            <h2>
                Conviértete en todo un{" "}
                <span className="span-pr-color upperCase">profesional</span> con
                nuestros cursos
            </h2>

            {coursesDataItem.map((c) => (
                <ItemCourseData key={c.id} item={c} />
            ))}
        </section>
    );
}

export default CoursesDataSection;
