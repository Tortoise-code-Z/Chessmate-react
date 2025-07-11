import { CourseDataItem } from "../../types/types";
import { getImage, getImageSize } from "../../utils/images";

type Props = {
    item: CourseDataItem;
};

function ItemCourseData({ item }: Props) {
    return (
        <div>
            <figure>
                <img
                    src={getImage(item.url, ["static"])}
                    alt={item.title}
                    width={getImageSize(item.url, "width")}
                    height={getImageSize(item.url, "height")}
                />
            </figure>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default ItemCourseData;
