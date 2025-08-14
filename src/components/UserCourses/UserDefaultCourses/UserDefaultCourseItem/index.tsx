import { DefualtCourse, Progress } from "../../../../types/types";
import styles from "./UserDefaultCourseItem.module.css";
import { Link } from "react-router-dom";
import { paths } from "../../../../consts/paths";
import UserProgress from "../UserProgress";
import DefaultCourseImage from "../DefaultCourseImage";

type Props = {
    data: DefualtCourse & Progress;
};

function UserDefaultCourseItem({ data }: Props) {
    return (
        <Link
            to={`/${paths.class.replace(":id", data.curseID.toString())}`}
            className={[styles.userDefaultCourseItem].join(" ")}
        >
            <UserProgress data={data} />
            <DefaultCourseImage data={data} />
            <p className={[styles.title].join(" ")}>{data.title}</p>
        </Link>
    );
}

export default UserDefaultCourseItem;
