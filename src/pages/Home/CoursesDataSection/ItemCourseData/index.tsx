import FigureImage from "../../../../components/FigureImage";
import TitleHx from "../../../../components/TitleHx";
import { CourseDataItem } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./ItemCourseData.module.css";

type Props = {
    item: CourseDataItem;
    index: number;
};

/**
 * ItemCourseData component that displays an individual card item with image and description.
 *
 * Features:
 * - `FigureImage`: Displays the card image with proper sizing and alt/title attributes.
 * - `TitleHx`: Shows the card title.
 * - Paragraph displaying the card description.
 * - Alternates layout direction for odd-indexed items using "row-reverse" class.
 *
 * Props:
 * - `item` (CourseDataItem): Object containing card image URL, title, and description.
 * - `index` (number): Position of the item in the list to determine layout styling.
 *
 * @returns JSX element rendering a single card item with image and description.
 */

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
