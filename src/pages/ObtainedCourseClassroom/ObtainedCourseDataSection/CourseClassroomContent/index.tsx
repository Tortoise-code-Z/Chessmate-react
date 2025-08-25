import { useState } from "react";
import styles from "./CourseClassroomContent.module.css";
import CourseThemes from "./CourseThemes";
import {
    Course,
    IsObtainedCourse,
    ThemeContent,
} from "../../../../types/types";
import TitleHx from "../../../../components/TitleHx";
import LightComponent from "../../../../components/LightComponent";
import VideoReproductor from "../VideoReproductor";

type Props = {
    data: Course & IsObtainedCourse;
};

function CourseClassroomContent({ data }: Props) {
    const [showVideo, setShowVideo] = useState<ThemeContent | null>(null);

    return (
        <div className={styles.courseClassroomContent}>
            <LightComponent top={50} right={60} />
            <TitleHx level={2}>
                <span className={["upperCase", "span-pr-color"].join(" ")}>
                    contenido
                </span>{" "}
                del curso
            </TitleHx>

            <CourseThemes data={data} setShowVideo={setShowVideo} />

            {showVideo && (
                <VideoReproductor
                    onClick={() => setShowVideo(null)}
                    title={showVideo.title}
                    classNames={[styles.videoItem]}
                    src={showVideo.video}
                />
            )}
        </div>
    );
}

export default CourseClassroomContent;
