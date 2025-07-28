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
        <div className={[styles].join(" ")}>
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
                    <p>{data.shortDescription}</p>
                    <span>{data.level}</span>
                    <p>{data.price} $</p>
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
