import styles from "./CourseBanner.module.css";
import useBannerCourse from "../../../hooks/useBannerCourse";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { getImage, getImageSize } from "../../../utils/images";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import BannerCard from "./BannerCard";
import FigureImage from "../../../components/FigureImage";

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
                {data && (
                    <>
                        <FigureImage
                            classNames={[styles.bannerBackground]}
                            src={getImage(data?.imageUrl?.full, ["courses"])}
                            alt={getImage(data?.imageUrl?.full, ["courses"])}
                            title={getImage(data?.imageUrl?.full, ["courses"])}
                            width={getImageSize(data?.imageUrl?.full, "width")}
                            height={getImageSize(
                                data?.imageUrl?.full,
                                "height"
                            )}
                        />

                        <BannerCard data={data} />
                    </>
                )}
            </DataStateWrapper>
        </section>
    );
}

export default CourseBanner;
