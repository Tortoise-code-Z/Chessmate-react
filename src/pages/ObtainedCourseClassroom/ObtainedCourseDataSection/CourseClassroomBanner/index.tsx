import TitleHx from "../../../../components/TitleHx";
import { Course, IsObtainedCourse } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./CourseClassroomBanner.module.css";

type Props = {
    data: Course & IsObtainedCourse;
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
                <TitleHx>{data.title}</TitleHx>
            </div>

            <img
                className={styles.bannerBackground}
                src={getImage(data.imageUrl.full, ["courses"])}
                width={getImageSize(data.imageUrl.full, "width")}
                height={getImageSize(data.imageUrl.full, "height")}
            />
        </div>
    );
}

export default CourseClassroomBanner;
