// import { useParams } from "react-router-dom";

import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";

type Props = {};

function CoursesDetail({}: Props) {
    // const params = useParams();
    const { user } = useUserAuthStore();

    return (
        <>
            {/* <CourseDataSection /> */}
            {/* <CourseCommentsSection /> */}
            <CoursesRecomended
                titleContain={
                    <>
                        Tambien te puede{" "}
                        <span
                            className={["span-pr-color", "upperCase"].join(" ")}
                        >
                            Interesar
                        </span>
                    </>
                }
                titleDisplay={"Col"}
                titleAlign={"center"}
                limit={4}
                userID={user?.userID}
            />
        </>
    );
}

export default CoursesDetail;
