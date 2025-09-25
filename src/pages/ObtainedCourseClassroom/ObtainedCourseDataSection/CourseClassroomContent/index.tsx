import { useState } from "react";
import styles from "./CourseClassroomContent.module.css";
import CourseThemes from "./CourseThemes";
import { VideoData } from "../../../../types/types";
import TitleHx from "../../../../components/TitleHx";
import LightComponent from "../../../../components/LightComponent";
import VideoReproductor from "../VideoReproductor";
import { useCourseClassroomApi } from "../../../../hooks/useCourseClassroom";
import Button from "../../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../../../consts/paths";
import { FaInfoCircle } from "react-icons/fa";
import { AnimatedInView } from "../../../../components/AnimatedInView";

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

    const navigate = useNavigate();
    const params = useParams();

    return (
        <AnimatedInView>
            <div className={styles.courseClassroomContent}>
                <LightComponent top={50} right={60} />

                <TitleHx level={2}>
                    <span className={["upperCase", "span-pr-color"].join(" ")}>
                        contenido
                    </span>{" "}
                    del curso
                </TitleHx>

                <CourseThemes data={data} setShowVideo={setShowVideo} />

                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        if (params.id) {
                            navigate(
                                `/${PATHS.coursesDetail.replace(
                                    ":id",
                                    params.id
                                )}`
                            );
                        }
                    }}
                >
                    <FaInfoCircle />
                    Ver detalles del curso
                </Button>

                {showVideo && (
                    <VideoReproductor
                        setShowVideo={() => setShowVideo(null)}
                        title={showVideo?.subthemeContent?.title}
                        classNames={[styles.videoItem]}
                        videoData={showVideo}
                    />
                )}
            </div>
        </AnimatedInView>
    );
}

export default CourseClassroomContent;
