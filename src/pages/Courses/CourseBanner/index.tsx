import { HiMiniShoppingBag } from "react-icons/hi2";
import styles from "./CourseBanner.module.css";
import { useNavigate } from "react-router-dom";
import useBannerCourse from "../../../hooks/useBannerCourse";
import { JSON_URL } from "../../../consts/url";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { getImage, getImageSize } from "../../../utils/images";
import { paths } from "../../../consts/paths";
import Button from "../../../components/Button";

type Props = {};

function CourseBanner({}: Props) {
    const navigate = useNavigate();
    const { data, isLoading, error } = useBannerCourse(JSON_URL);

    return (
        <section className={[styles.courseBanner].join(" ")}>
            <DataStateWrapper isLoading={isLoading} error={error}>
                {data && (
                    <>
                        <img
                            className={[styles.bannerBackground].join(" ")}
                            src={getImage(data.imageUrl.full, ["courses"])}
                            width={getImageSize(data.imageUrl.full, "width")}
                            height={getImageSize(data.imageUrl.full, "height")}
                        />
                        <div
                            onClick={() =>
                                navigate(
                                    `/${paths.coursesDetail.replace(
                                        ":id",
                                        data.curseID.toString()
                                    )}`
                                )
                            }
                        >
                            <div
                                className={[styles.courseImgContainer].join(
                                    " "
                                )}
                            >
                                <div className={[styles.price].join(" ")}>
                                    <span>{data.price} $</span>
                                </div>
                                <figure>
                                    <img
                                        src={getImage(data.imageUrl.thumb, [
                                            "courses",
                                        ])}
                                        alt={data?.title}
                                        title={data?.title}
                                        width={getImageSize(
                                            data.imageUrl.thumb,
                                            "width"
                                        )}
                                        height={getImageSize(
                                            data.imageUrl.thumb,
                                            "height"
                                        )}
                                    />
                                </figure>
                            </div>

                            <div className={[styles.courseData].join(" ")}>
                                <div>
                                    <h2>{data.title}</h2>
                                    <p>{data.shortDescription}</p>
                                    <span
                                        className={[
                                            "span-pr-color",
                                            "text-medium",
                                        ].join(" ")}
                                    >
                                        {data.level}
                                    </span>
                                </div>
                                <Button
                                    propagation={false}
                                    onClick={() => console.log("Comprando...")}
                                >
                                    <HiMiniShoppingBag />
                                    Comprar
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </DataStateWrapper>
        </section>
    );
}

export default CourseBanner;
