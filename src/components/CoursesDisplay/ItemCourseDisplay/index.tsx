import { useNavigate } from "react-router-dom";
import { CourseJSON } from "../../../types/types";
import { getImage } from "../../../utils/images";
import { paths } from "../../../consts/paths";
import styles from "./ItemCourseDisplay.module.css";
import PurchaseAction from "../../PurchaseAction";

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
            className={[
                display === "Row"
                    ? styles.itemRowContainer
                    : styles.itemContainer,
            ].join(" ")}
            onClick={() =>
                navigate(
                    `/${paths.coursesDetail.replace(
                        ":id",
                        data.curseID.toString()
                    )}`
                )
            }
        >
            <figure>
                <img
                    src={getImage(data.imageUrl.thumb ?? "", ["courses"])}
                    alt={data.title}
                    title={data.title}
                />
            </figure>
            <div className={[styles.itemDataContainer].join(" ")}>
                <div className={[styles.itemData].join(" ")}>
                    <h3>{data.title}</h3>
                    <p className={[styles.description].join(" ")}>
                        {data.shortDescription}
                    </p>
                    <p className={[styles.level].join(" ")}>{data.level}</p>
                </div>
                {action && (
                    <div className={[styles.actionsPrice].join(" ")}>
                        <PurchaseAction
                            courseID={courseID}
                            isObtained={data.isObtained}
                        />
                        <p className={[styles.price].join(" ")}>
                            {data.price}$
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemCourseDisplay;
