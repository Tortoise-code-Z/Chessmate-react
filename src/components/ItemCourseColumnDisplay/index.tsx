import { useNavigate } from "react-router-dom";
import { Course } from "../../types/types";
import { getImage } from "../../utils/images";
import Button from "../Button";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { paths } from "../../consts/paths";

type Props = {
    action?: boolean;
    data: Course;
};

function ItemCourseColumnDisplay({ data, action = true }: Props) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() =>
                navigate(
                    `/${paths.coursesDetail.replace(
                        ":id",
                        data.curseID.toString()
                    )}`
                )
            }
        >
            <figure>
                <img
                    src={getImage(data.imageUrl.thumb ?? "", ["courses"])}
                    alt={data.title}
                    title={data.title}
                />
            </figure>
            <div>
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.shortDescription}</p>
                    <p>{data.level}</p>
                </div>
                {action && (
                    <div>
                        <Button>
                            <HiMiniShoppingBag />
                            Comprar
                        </Button>
                        <p>{data.price}$</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemCourseColumnDisplay;
