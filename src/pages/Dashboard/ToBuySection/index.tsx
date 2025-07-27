import CoursesDisplay from "../../../components/CoursesDisplay";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import LightComponent from "../../../components/LightComponent";
import { JSON_URL } from "../../../consts/url";
import useUnpurchasedCourses from "../../../hooks/useUnpurchasedCourses";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { Course } from "../../../types/types";
import styles from "./ToBuySection.module.css";

type Props = {};

function ToBuySection({}: Props) {
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useUnpurchasedCourses(
        JSON_URL,
        user?.userID as number,
        5
    );

    return (
        <section className={[styles.toBuySection].join(" ")}>
            <LightComponent top={40} right={30} />
            <h2>
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    Comprar
                </span>{" "}
                cursos
            </h2>
            <DataStateWrapper isLoading={isLoading} error={error}>
                <CoursesDisplay
                    courses={data ?? ([] as Course[])}
                    display="Col"
                />
            </DataStateWrapper>
        </section>
    );
}

export default ToBuySection;
