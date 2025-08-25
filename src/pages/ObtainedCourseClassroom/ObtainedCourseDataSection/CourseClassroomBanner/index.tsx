import TitleHx from "../../../../components/TitleHx";
import { Course, IsObtainedCourse } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./CourseClassroomBanner.module.css";

type Props = {
    data: Course & IsObtainedCourse;
};

function CourseClassroomBanner({ data }: Props) {
    return (
        <div className={styles.courseClassroomBanner}>
            <div className={styles.titleContainer}>
                <p>Bienvenido a tu curso</p>
                <TitleHx>{data.title}</TitleHx>
            </div>

            <img
                className={[styles.bannerBackground].join(" ")}
                src={getImage(data.imageUrl.full, ["courses"])}
                width={getImageSize(data.imageUrl.full, "width")}
                height={getImageSize(data.imageUrl.full, "height")}
            />
        </div>
    );
}

export default CourseClassroomBanner;
