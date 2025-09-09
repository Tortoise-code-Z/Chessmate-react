import { useState } from "react";
import styles from "./CourseClassroomContent.module.css";
import CourseThemes from "./CourseThemes";
import { VideoData } from "../../../../types/types";
import TitleHx from "../../../../components/TitleHx";
import LightComponent from "../../../../components/LightComponent";
import VideoReproductor from "../VideoReproductor";
import { DEFAULT_COURSES_VALUES } from "../../../../consts/general";
import { useCourseClassroomApi } from "../../../../hooks/useCourseClassroom";

type Props = {
    data: useCourseClassroomApi | undefined;
};

/**
 * CourseClassroomContent component that renders the main content of a specific course classroom.
 *
 * Features:
 * - LightComponent for decorative visual effects.
 * - TitleHx displaying the "Contenido del curso" section title with custom styling.
 * - CourseThemes component rendering the course themes and allowing video selection.
 * - VideoReproductor to play a selected theme's video in a modal overlay.
 *
 * State:
 * - showVideo: Holds the currently selected theme content for video playback or null if no video is shown.
 *
 * Props:
 * - data: Object containing course details including themes and content.
 *
 * @returns JSX element rendering the course classroom content with themes and optional video playback.
 */

function CourseClassroomContent({ data }: Props) {
    const [showVideo, setShowVideo] = useState<VideoData | null>(null);

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
                    setShowVideo={() => setShowVideo(null)}
                    title={
                        showVideo?.subthemeContent?.title ||
                        DEFAULT_COURSES_VALUES.title
                    }
                    classNames={[styles.videoItem]}
                    videoData={showVideo}
                />
            )}
        </div>
    );
}

export default CourseClassroomContent;
