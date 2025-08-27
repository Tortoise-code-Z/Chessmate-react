import { DefualtCourse, Progress } from "../../../../types/types";
import styles from "./UserDefaultCourseItem.module.css";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../consts/paths";
import UserProgress from "../UserProgress";
import DefaultCourseImage from "../DefaultCourseImage";
import TitleHx from "../../../TitleHx";

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
            <DefaultCourseImage data={data} />
            <TitleHx classNames={[styles.title]} level={4}>
                {data.title}
            </TitleHx>
        </Link>
    );
}

export default UserDefaultCourseItem;
