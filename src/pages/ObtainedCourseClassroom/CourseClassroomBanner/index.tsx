import { Course, IsObtainedCourse } from "../../../types/types";
import { getImage, getImageSize } from "../../../utils/images";
import styles from "./CourseClassroomBanner.module.css";

type Props = {
    data: Course & IsObtainedCourse;
};

function CourseClassroomBanner({ data }: Props) {
    return (
        <section className={styles.courseClassroomBanner}>
            <div className={styles.titleContainer}>
                <p>Bienvenido a tu curso</p>
                <h2>{data.title}</h2>
            </div>

            <img
                className={[styles.bannerBackground].join(" ")}
                src={getImage(data.imageUrl.full, ["courses"])}
                width={getImageSize(data.imageUrl.full, "width")}
                height={getImageSize(data.imageUrl.full, "height")}
            />
        </section>
    );
}

export default CourseClassroomBanner;
