import styles from "./CourseBanner.module.css";
import useBannerCourse from "../../../hooks/useBannerCourse";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { getImage, getImageSize } from "../../../utils/images";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import BannerCard from "./BannerCard";

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
    const { data, isLoading, error } = useBannerCourse(
        DATABASE_KEY,
        user?.userID
    );

    return (
        <section className={styles.courseBanner}>
            <DataStateWrapper isLoading={isLoading} error={error}>
                {data && (
                    <>
                        <img
                            className={styles.bannerBackground}
                            src={getImage(data.imageUrl.full, ["courses"])}
                            width={getImageSize(data.imageUrl.full, "width")}
                            height={getImageSize(data.imageUrl.full, "height")}
                        />
                        <BannerCard data={data} />
                    </>
                )}
            </DataStateWrapper>
        </section>
    );
}

export default CourseBanner;
