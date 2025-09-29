import { AnimatedInView } from "../../../../components/AnimatedInView";
import FigureImage from "../../../../components/FigureImage";
import TitleHx from "../../../../components/TitleHx";
import { TITLE_DEFAULT_MSG } from "../../../../consts/general";
import { useCourseClassroomApi } from "../../../../hooks/useCourseClassroom";
import { asString } from "../../../../utils/general";

import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./CourseClassroomBanner.module.css";

type Props = {
    data: useCourseClassroomApi | undefined;
};

/**
 * CourseClassroomBanner - React component that displays the banner for a course
 * in the classroom view.
 *
 * Features:
 * - Shows a welcome message and the course title using `TitleHx`.
 * - Displays the course image as a banner background with `FigureImage`.
 * - Wraps the title container in `AnimatedInView` for entrance animation.
 * - Safely handles missing course data and provides a default title.
 * - Uses utility functions `getImage` and `getImageSize` for image handling.
 *
 * Props:
 * - `data`: Object containing course classroom API data (`useCourseClassroomApi`) or undefined.
 *
 * @returns JSX.Element: A banner section with course title and background image.
 */

function CourseClassroomBanner({ data }: Props) {
    return (
        <div className={styles.courseClassroomBanner}>
            <AnimatedInView>
                <div className={styles.titleContainer}>
                    <p>Bienvenido a tu curso</p>
                    <TitleHx>
                        {asString(data?.course?.title) || TITLE_DEFAULT_MSG}
                    </TitleHx>
                </div>
            </AnimatedInView>

            <FigureImage
                classNames={[styles.bannerBackground]}
                src={getImage(data?.course?.imageUrl?.full, ["courses"])}
                alt={asString(data?.course?.title)}
                title={asString(data?.course?.title)}
                width={getImageSize(data?.course?.imageUrl?.full, "width")}
                height={getImageSize(data?.course?.imageUrl?.full, "height")}
            />
        </div>
    );
}

export default CourseClassroomBanner;
