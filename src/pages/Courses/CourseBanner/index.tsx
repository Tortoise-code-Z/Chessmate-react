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

type Props = {};

/**
 * CourseBanner - React component that displays the main course banner with featured course information.
 *
 * Features:
 * - Fetches banner course data using `useBannerCourse` and optionally includes user-specific data.
 * - Handles loading and error states using `DataStateWrapper`.
 * - Displays the course banner image with `FigureImage`, using utilities to get the image source and dimensions.
 * - Renders `BannerCard` to show course details on top of the banner.
 * - Applies CSS module styling and conditionally adds error styles if data fetching fails.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: A section containing a featured course banner image and course details card.
 */

function CourseBanner({}: Props) {
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useBannerCourse(DATABASE_KEY, {
        required: !!user,
        userID: user ? asNumber(user?.userID) : undefined,
    });

    const safeData = asObject<CourseJSON & IsObtainedCourse>(data);

    return (
        <section
            className={[styles.courseBanner, error ? styles.cbError : ""].join(
                " "
            )}
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
                        src={getImage(safeData?.imageUrl?.full, ["courses"])}
                        alt={getImage(safeData?.imageUrl?.full, ["courses"])}
                        title={getImage(safeData?.imageUrl?.full, ["courses"])}
                        width={getImageSize(safeData?.imageUrl?.full, "width")}
                        height={getImageSize(
                            safeData?.imageUrl?.full,
                            "height"
                        )}
                    />

                    <BannerCard data={safeData} />
                </>
            </DataStateWrapper>
        </section>
    );
}

export default CourseBanner;
