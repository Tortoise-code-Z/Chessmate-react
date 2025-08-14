import { DefualtCourse } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";

type Props = {
    data: DefualtCourse;
};

function DefaultCourseImage({ data }: Props) {
    return (
        <figure>
            <img
                src={getImage(data.imageUrl.general, ["defaultCourses"])}
                alt={data.title}
                title={data.title}
                width={getImageSize(data.imageUrl.general, "width")}
                height={getImageSize(data.imageUrl.general, "height")}
            />
        </figure>
    );
}

export default DefaultCourseImage;
