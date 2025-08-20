import { useState } from "react";
import Button from "../../../components/Button";
import { Course, IsObtainedCourse, ThemeContent } from "../../../types/types";
import styles from "./CourseClassroomContent.module.css";
import { FaChevronDown } from "react-icons/fa6";
import FigureImage from "../../../components/FigureImage";
import { getImage, getImageSize } from "../../../utils/images";
import VideoReproductor from "../VideoReproductor";

type Props = {
    data: Course & IsObtainedCourse;
};

function CourseClassroomContent({ data }: Props) {
    const [videosIndex, setVideosIndex] = useState<number | null>(null);
    const [showVideo, setShowVideo] = useState<ThemeContent | null>(null);

    return (
        <section className={styles.courseClassroomContent}>
            <h2>
                <span className={["upperCase", "span-pr-color"].join(" ")}>
                    contenido
                </span>{" "}
                del curso
            </h2>
            <div className={styles.themesContainer}>
                {data.content.themes?.map((theme) => (
                    <>
                        <Button
                            classNames={[styles.themeBtn]}
                            variant={
                                videosIndex === theme.id
                                    ? "Primary"
                                    : "Secondary"
                            }
                            key={theme.id}
                            onClick={() =>
                                videosIndex === theme.id
                                    ? setVideosIndex(null)
                                    : setVideosIndex(theme.id)
                            }
                        >
                            <div className={[styles.themeData].join(" ")}>
                                <p className={[styles.themeTitle].join(" ")}>
                                    {theme.title}
                                </p>
                                <p
                                    className={[styles.themeDescription].join(
                                        " "
                                    )}
                                >
                                    {theme.description}
                                </p>
                            </div>
                            <FaChevronDown
                                style={{
                                    transform:
                                        videosIndex === theme.id
                                            ? "rotate(180deg)"
                                            : "rotate(0deg)",
                                }}
                            />
                        </Button>
                        {videosIndex === theme.id && (
                            <div className={[styles.videosContainer].join(" ")}>
                                {theme.content.map((subtheme) => (
                                    <>
                                        <Button
                                            onClick={() =>
                                                setShowVideo(subtheme)
                                            }
                                            classNames={[styles.videoButton]}
                                            variant="Card"
                                        >
                                            <FigureImage
                                                classNames={[
                                                    styles.videoCardImage,
                                                ]}
                                                src={getImage(subtheme.cover, [
                                                    "static",
                                                ])}
                                                alt={subtheme.title}
                                                title={subtheme.title}
                                                width={getImageSize(
                                                    subtheme.cover,
                                                    "width"
                                                )}
                                                height={getImageSize(
                                                    subtheme.cover,
                                                    "height"
                                                )}
                                            />
                                            <p
                                                className={[styles.title].join(
                                                    " "
                                                )}
                                            >
                                                {subtheme.title}
                                            </p>
                                        </Button>
                                    </>
                                ))}
                            </div>
                        )}
                    </>
                ))}
            </div>
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
