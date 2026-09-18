import FigureImage from "../../../../components/FigureImage";
import TitleHx from "../../../../components/TitleHx";

import { CourseDataItem } from "../../../../types/types";
import { asString } from "../../../../utils/general";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./ItemCourseData.module.css";
import { useTranslation } from "react-i18next";

type Props = {
    item: CourseDataItem;
    index: number;
};

/**
 * ItemCourseData - React component that renders a single course item with image and description.
 *
 * Features:
 * - Displays the course image using `FigureImage` with dynamic size from `getImageSize`.
 * - Shows the course title with `TitleHx` (level 3).
 * - Displays the course description or falls back to `common:defaults.description` if missing.
 * - Alternates layout direction (`row` or `row-reverse`) based on the `index` to create a staggered design.
 * - Safely handles undefined values using `asString` and utility functions.
 *
 * Props:
 * - `item`: Object containing course data (`CourseDataItem`).
 * - `index`: Index of the item in the list to determine layout orientation.
 *
 * @returns JSX.Element: A styled course item with image, title, and description.
 */

function ItemCourseData({ item, index }: Props) {
    const { t } = useTranslation();
    return (
        <div
            className={[
                styles.itemContainer,
                index % 2 !== 0 ? "row-reverse" : "",
            ].join(" ")}
        >
            <FigureImage
                src={getImage(item?.url, ["static"])}
                alt={asString(item?.title)}
                title={asString(item?.title)}
                width={getImageSize(item?.url, "width")}
                height={getImageSize(item?.url, "height")}
            />

            <div>
                <TitleHx level={3}>{item.title}</TitleHx>
                <p>{asString(item?.description) || t("common:defaults.description")}</p>
            </div>
        </div>
    );
}

export default ItemCourseData;
