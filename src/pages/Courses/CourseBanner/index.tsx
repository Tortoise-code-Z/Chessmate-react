import styles from "./CourseBanner.module.css";
import useBannerCourse from "../../../hooks/useBannerCourse";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { getImage, getImageSize } from "../../../utils/images";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import BannerCard from "./BannerCard";
import FigureImage from "../../../components/FigureImage";
import { asNumber, asObject } from "../../../utils/general";
import { CourseJSON, IsObtainedCourse } from "../../../types/types";
import { AnimatedInView } from "../../../components/AnimatedInView";

type Props = {};

/**
 * CourseBanner component
 *
 * Displays the main banner for a course. Fetches the banner data for the current user
 * using the `useBannerCourse` hook, and renders a background image along with a `BannerCard`.
 *
 * Data loading and errors are handled by the `DataStateWrapper` component.
 *
 * Props:
 * - none
 *
 * @returns JSX element containing the course banner and card.
 */

function CourseBanner({}: Props) {
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useBannerCourse(DATABASE_KEY, {
        required: !!user,
        userID: user ? asNumber(user?.userID) : undefined,
    });

    const safeData = asObject<CourseJSON & IsObtainedCourse>(data);

    return (
        <AnimatedInView>
            <section
                className={[
                    styles.courseBanner,
                    error ? styles.cbError : "",
                ].join(" ")}
            >
                <DataStateWrapper
                    isLoading={isLoading}
                    error={error}
                    paddingErrorLateral={true}
                    errorMsg="No se ha podido recuperar el curso..."
                >
                    <>
                        <FigureImage
                            classNames={[styles.bannerBackground]}
                            src={getImage(safeData?.imageUrl?.full, [
                                "courses",
                            ])}
                            alt={getImage(safeData?.imageUrl?.full, [
                                "courses",
                            ])}
                            title={getImage(safeData?.imageUrl?.full, [
                                "courses",
                            ])}
                            width={getImageSize(
                                safeData?.imageUrl?.full,
                                "width"
                            )}
                            height={getImageSize(
                                safeData?.imageUrl?.full,
                                "height"
                            )}
                        />

                        <BannerCard data={safeData} />
                    </>
                </DataStateWrapper>
            </section>
        </AnimatedInView>
    );
}

export default CourseBanner;
