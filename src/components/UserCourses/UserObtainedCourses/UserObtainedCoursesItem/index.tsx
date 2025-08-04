import { Link } from "react-router-dom";
import { paths } from "../../../../consts/paths";
import { CourseJSON, Progress } from "../../../../types/types";
import { getImage, getImageSize } from "../../../../utils/images";
import styles from "./UserObtainedCoursesItem.module.css";
import { FaInfoCircle } from "react-icons/fa";

type Props = {
    data: CourseJSON & Progress;
};

function UserObtainedCoursesItem({ data }: Props) {
    const image = getImage(data.imageUrl.thumb, ["courses"]);

    return (
        <div className={[styles.userObtainedCoursesItem].join(" ")}>
            <div>
                <figure>
                    <img
                        src={image}
                        alt={data.title}
                        title={data.title}
                        width={getImageSize(image, "width")}
                        height={getImageSize(image, "height")}
                    />
                </figure>
                <div>
                    <p>{data.level}</p>
                    <p>Progress: {data.progress}%</p>
                </div>
            </div>

            <div>
                <p>{data.title}</p>
                <Link
                    className={["button", "buttonPrimary", "fit-content "].join(
                        " "
                    )}
                    to={`/${paths.coursesDetail.replace(
                        ":id",
                        data.curseID.toString()
                    )}`}
                    title="Ver detalles"
                >
                    <FaInfoCircle />
                    Ver detalles
                </Link>
            </div>
        </div>
    );
}

export default UserObtainedCoursesItem;
