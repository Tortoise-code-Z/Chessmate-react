import { useNavigate } from "react-router-dom";
import { Course } from "../../types/types";
import { getImage } from "../../utils/images";
import Button from "../Button";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { paths } from "../../consts/paths";
import styles from "./ItemCourseColumnDisplay.module.css";

type Props = {
    action?: boolean;
    data: Course;
};

function ItemCourseColumnDisplay({ data, action = true }: Props) {
    const navigate = useNavigate();
    return (
        <div
            className={[styles.itemContainer].join(" ")}
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
                        <Button>
                            <HiMiniShoppingBag />
                            Comprar
                        </Button>
                        <p className={[styles.price].join(" ")}>
                            {data.price}$
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemCourseColumnDisplay;
