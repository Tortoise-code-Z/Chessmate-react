import FigureImage from "../../../../components/FigureImage";
import TitleHx from "../../../../components/TitleHx";
import { DEFAULT_COURSES_VALUES } from "../../../../consts/general";
import { useCourseClassroomApi } from "../../../../hooks/useCourseClassroom";

import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./CourseClassroomBanner.module.css";

type Props = {
    data: useCourseClassroomApi | undefined;
};

/**
 * CourseClassroomBanner component that renders the banner for a specific course classroom.
 *
 * Features:
 * - Displays a welcome message for the user.
 * - TitleHx component showing the course title.
 * - Banner background image with dynamic source and dimensions based on course data.
 *
 * Props:
 * - data: Object containing course details, including title and full image URL.
 *
 * @returns JSX element rendering the course classroom banner.
 */

function CourseClassroomBanner({ data }: Props) {
    return (
        <div className={styles.courseClassroomBanner}>
            <div className={styles.titleContainer}>
                <p>Bienvenido a tu curso</p>
                <TitleHx>
                    {data?.course?.title || DEFAULT_COURSES_VALUES.title}
                </TitleHx>
            </div>

            <FigureImage
                classNames={[styles.bannerBackground]}
                src={getImage(data?.course?.imageUrl?.full, ["courses"])}
                alt={data?.course?.title}
                title={data?.course?.title}
                width={getImageSize(data?.course?.imageUrl?.full, "width")}
                height={getImageSize(data?.course?.imageUrl?.full, "height")}
            />
        </div>
    );
}

export default CourseClassroomBanner;
