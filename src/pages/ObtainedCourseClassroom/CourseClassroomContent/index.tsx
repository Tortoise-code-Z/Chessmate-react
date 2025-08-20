import { useState } from "react";
import { Course, IsObtainedCourse, ThemeContent } from "../../../types/types";
import styles from "./CourseClassroomContent.module.css";
import VideoReproductor from "../VideoReproductor";
import LightComponent from "../../../components/LightComponent";
import CourseThemes from "./CourseThemes";

type Props = {
    data: Course & IsObtainedCourse;
};

function CourseClassroomContent({ data }: Props) {
    const [showVideo, setShowVideo] = useState<ThemeContent | null>(null);

    return (
        <section className={styles.courseClassroomContent}>
            <LightComponent top={50} right={60} />

            <h2>
                <span className={["upperCase", "span-pr-color"].join(" ")}>
                    contenido
                </span>{" "}
                del curso
            </h2>

            <CourseThemes data={data} setShowVideo={setShowVideo} />

            {showVideo && (
                <VideoReproductor
                    onClick={() => setShowVideo(null)}
                    title={showVideo.title}
                    classNames={[styles.videoItem]}
                    src={showVideo.video}
                />
            )}
        </section>
    );
}

export default CourseClassroomContent;
