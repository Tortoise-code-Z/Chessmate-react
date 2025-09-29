import TitleHx from "../../../../../components/TitleHx";
import WritteMachine from "../../../../../components/WritteMachine";
import { TITLE_DEFAULT_MSG } from "../../../../../consts/general";
import { UseCourseApiType } from "../../../../../types/types";
import { asString } from "../../../../../utils/general";
import styles from "./CourseData.module.css";

type Props = {
    index: number;
    data: UseCourseApiType | undefined;
};

/**
 * CourseData - React component that displays the title and description of the selected course theme.
 *
 * Features:
 * - Shows the main course title using `TitleHx`, with a fallback to `TITLE_DEFAULT_MSG` if missing.
 * - Displays the selected theme's title with proper heading level.
 * - Renders the theme description using `WritteMachine` for a typewriter animation effect.
 * - Safely handles missing or undefined data using utility functions like `asString`.
 * - Styled with CSS modules for consistent layout and spacing.
 *
 * Props:
 * - `data`: Course data (`UseCourseApiType | undefined`) containing course and theme information.
 * - `index`: Current theme index to determine which theme's data to display.
 *
 * @returns JSX.Element: A section showing the selected theme's title and animated description.
 */

function CourseData({ data, index }: Props) {
    return (
        <div className={styles.courseData}>
            <TitleHx>
                {asString(data?.courses?.title) || TITLE_DEFAULT_MSG}
            </TitleHx>

            <TitleHx level={2}>
                {asString(
                    data?.courses?.content?.themes?.find((t) => t?.id === index)
                        ?.title
                ) || TITLE_DEFAULT_MSG}
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
