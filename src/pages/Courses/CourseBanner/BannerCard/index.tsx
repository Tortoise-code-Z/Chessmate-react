import { useNavigate } from "react-router-dom";
import PurchaseAction from "../../../../components/PurchaseAction";
import { paths } from "../../../../consts/paths";
import { CourseJSON, IsObtainedCourse } from "../../../../types/types";
import styles from "./BannerCard.module.css";
import TitleHx from "../../../../components/TitleHx";

type Props = {
    data: CourseJSON & IsObtainedCourse;
};

function BannerCard({ data }: Props) {
    const navigate = useNavigate();
    const bannerCardHandleClick = () => {
        navigate(
            `/${paths.coursesDetail.replace(":id", data.curseID.toString())}`
        );
    };
    return (
        <div
            className={styles.bannerCard}
            onClick={() => bannerCardHandleClick()}
        >
            <div className={styles.courseData}>
                <TitleHx level={1}>{data.title}</TitleHx>
                <p className={styles.description}>{data.shortDescription}</p>
                <span
                    className={[
                        "span-pr-color",
                        "text-medium",
                        styles.level,
                    ].join(" ")}
                >
                    {data.level}
                </span>
                <p className={styles.price}>{data.price} $</p>
            </div>

            <PurchaseAction
                courseID={data.curseID}
                isObtained={data.isObtained}
            />
        </div>
    );
}

export default BannerCard;
