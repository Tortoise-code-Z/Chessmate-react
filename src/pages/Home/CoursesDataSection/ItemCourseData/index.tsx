import FigureImage from "../../../../components/FigureImage";
import TitleHx from "../../../../components/TitleHx";
import { CourseDataItem } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./ItemCourseData.module.css";

type Props = {
    item: CourseDataItem;
    index: number;
};

function ItemCourseData({ item, index }: Props) {
    return (
        <div
            className={[
                styles.itemContainer,
                index % 2 !== 0 ? "row-reverse" : "",
            ].join(" ")}
        >
            <FigureImage
                src={getImage(item.url, ["static"])}
                alt={item.title}
                title={item.title}
                width={getImageSize(item.url, "width")}
                height={getImageSize(item.url, "height")}
            />

            <div>
                <TitleHx level={3}>{item.title}</TitleHx>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default ItemCourseData;
