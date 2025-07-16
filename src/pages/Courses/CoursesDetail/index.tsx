import { useParams } from "react-router-dom";

type Props = {};

function CoursesDetail({}: Props) {
    const params = useParams();
    console.log(params);
    return <div>CoursesDetail</div>;
}

export default CoursesDetail;
