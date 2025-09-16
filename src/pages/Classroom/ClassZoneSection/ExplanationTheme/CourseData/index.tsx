import TitleHx from "../../../../../components/TitleHx";
import WritteMachine from "../../../../../components/WritteMachine";
import { DEFAULT_VALUES_DEFAULT_COURSES } from "../../../../../consts/general";
import { UseCourseApiType } from "../../../../../types/types";
import { asString } from "../../../../../utils/general";
import styles from "./CourseData.module.css";

type Props = {
    index: number;
    data: UseCourseApiType | undefined;
};

/**
 * CourseData component displaying the title and description of the current course theme.
 *
 * - Shows the main course title and the selected theme's title using `TitleHx`.
 * - Displays the theme description with a typewriter effect using `WritteMachine`.
 * - Retrieves the current theme's description based on the `index` prop.
 *
 * Props:
 *  - `data`: Course data of type `UseCourseApiType`.
 *  - `index`: Current theme index.
 *
 * @returns JSX element representing the course data section for the selected theme.
 */

function CourseData({ data, index }: Props) {
    return (
        <div className={styles.courseData}>
            <TitleHx>
                {asString(data?.courses?.title) ||
                    DEFAULT_VALUES_DEFAULT_COURSES.title}
            </TitleHx>

            <TitleHx level={2}>
                {asString(
                    data?.courses?.content?.themes?.find((t) => t?.id === index)
                        ?.title
                ) || DEFAULT_VALUES_DEFAULT_COURSES.title}
            </TitleHx>

            <WritteMachine
                data={
                    data?.courses?.content?.themes?.find((t) => t?.id === index)
                        ?.description
                }
                time={30}
                classNames={[styles.description]}
            />
        </div>
    );
}

export default CourseData;
