import { useNavigate } from "react-router-dom";
import { CourseJSON } from "../../../types/types";
import { getImage, getImageSize } from "../../../utils/images";
import { PATHS } from "../../../consts/paths";
import styles from "./ItemCourseDisplay.module.css";
import PurchaseAction from "../../PurchaseAction";
import TitleHx from "../../TitleHx";
import FigureImage from "../../FigureImage";

type Props = {
    action?: boolean;
    data: CourseJSON & { isObtained?: boolean };
    display?: "Row" | "Col";
    courseID: number;
};

function ItemCourseDisplay({
    data,
    action = true,
    display = "Col",
    courseID,
}: Props) {
    const navigate = useNavigate();

    return (
        <div
            className={
                display === "Row"
                    ? styles.itemRowContainer
                    : styles.itemContainer
            }
            onClick={() =>
                navigate(
                    `/${PATHS.coursesDetail.replace(
                        ":id",
                        data.curseID.toString()
                    )}`
                )
            }
        >
            <FigureImage
                src={getImage(data.imageUrl.thumb, ["courses"])}
                alt={data.title}
                title={data.title}
                width={getImageSize(data.imageUrl.thumb, "width")}
                height={getImageSize(data.imageUrl.thumb, "height")}
            />

            <div className={styles.itemDataContainer}>
                <div className={styles.itemData}>
                    <TitleHx level={3}>{data.title}</TitleHx>
                    <p className={styles.description}>
                        {data.shortDescription}
                    </p>
                    <p className={styles.level}>{data.level}</p>
                </div>
                {action && (
                    <div className={styles.actionsPrice}>
                        <PurchaseAction
                            courseID={courseID}
                            isObtained={data.isObtained}
                        />
                        <p className={styles.price}>{data.price}$</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemCourseDisplay;
