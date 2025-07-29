import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "../../../../components/Button";
import { Course } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./GeneralCourseData.module.css";

type Props = {
    data: Course;
};

function GeneralCourseData({ data }: Props) {
    return (
        <div className={[styles.generalCourseData].join(" ")}>
            <figure>
                <img
                    src={getImage(data.imageUrl.thumb, ["courses"])}
                    alt={data.title}
                    title={data.title}
                    width={getImageSize(data.imageUrl.thumb, "width")}
                    height={getImageSize(data.imageUrl.thumb, "height")}
                />
            </figure>
            <div>
                <div>
                    <h2>{data.title}</h2>
                    <p className={[styles.description].join(" ")}>
                        {data.shortDescription}
                    </p>
                    <span className={[styles.level].join(" ")}>
                        {data.level}
                    </span>
                    <p className={[styles.price].join(" ")}>{data.price} $</p>
                </div>
                <Button>
                    <HiMiniShoppingBag />
                    Comprar
                </Button>
            </div>
        </div>
    );
}

export default GeneralCourseData;
