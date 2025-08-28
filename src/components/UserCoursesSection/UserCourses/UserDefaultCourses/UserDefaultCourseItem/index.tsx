import styles from "./UserDefaultCourseItem.module.css";
import { Link } from "react-router-dom";
import UserProgress from "../UserProgress";
import { DefualtCourse, Progress } from "../../../../../types/types";
import { PATHS } from "../../../../../consts/paths";
import TitleHx from "../../../../TitleHx";
import FigureImage from "../../../../FigureImage";
import { getImage, getImageSize } from "../../../../../utils/images";

type Props = {
    data: DefualtCourse & Progress;
};

function UserDefaultCourseItem({ data }: Props) {
    return (
        <Link
            to={`/${PATHS.class.replace(":id", data.curseID.toString())}`}
            className={[styles.userDefaultCourseItem].join(" ")}
        >
            <UserProgress data={data} />
            <FigureImage
                src={getImage(data.imageUrl.general, ["defaultCourses"])}
                alt={data.title}
                title={data.title}
                width={getImageSize(data.imageUrl.general, "width")}
                height={getImageSize(data.imageUrl.general, "height")}
            />
            <TitleHx classNames={[styles.title]} level={4}>
                {data.title}
            </TitleHx>
        </Link>
    );
}

export default UserDefaultCourseItem;
