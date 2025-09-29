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
 * CourseClassroomContent - React component that displays the main content section of a course
 * within the classroom view.
 *
 * Features:
 * - Shows a title for the course content section using `TitleHx`.
 * - Renders `CourseThemes` to display the list of themes and subthemes.
 * - Manages video playback state with `showVideo` and renders `VideoReproductor` when a video is selected.
 * - Provides a button to navigate to the detailed course page using React Router's `useNavigate`.
 * - Includes decorative `LightComponent` and entrance animation with `AnimatedInView`.
 * - Handles safe access to course data and optional video data.
 *
 * Props:
 * - `data`: Object containing course classroom API data (`useCourseClassroomApi`) or undefined.
 *
 * @returns JSX.Element: A content section with course themes, video playback, and navigation to course details.
 */

function CourseClassroomContent({ data }: Props) {
    const [showVideo, setShowVideo] = useState<VideoData | null>(null);

    const navigate = useNavigate();
    const params = useParams();

    return (
        <>
            <AnimatedInView>
                <div className={styles.courseClassroomContent}>
                    <LightComponent top={50} right={60} />

                    <TitleHx level={2}>
                        <span
                            className={["upperCase", "span-pr-color"].join(" ")}
                        >
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
                </div>
            </AnimatedInView>
            {showVideo && (
                <VideoReproductor
                    setShowVideo={() => setShowVideo(null)}
                    title={showVideo?.subthemeContent?.title}
                    classNames={[styles.videoItem]}
                    videoData={showVideo}
                />
            )}
        </>
    );
}

export default CourseClassroomContent;
