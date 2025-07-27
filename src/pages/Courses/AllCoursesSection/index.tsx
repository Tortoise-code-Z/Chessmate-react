import { useState } from "react";
import SearchBar from "./SearchBar";
import { Level } from "../../../types/types";
import useAllCourses from "../../../hooks/useAllCourses";
import styles from "./AllCoursesSection.module.css";
import { JSON_URL } from "../../../consts/url";
import LightComponent from "../../../components/LightComponent";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import CoursesDisplay from "../../../components/CoursesDisplay";

type Props = {};

function AllCoursesSection({}: Props) {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<Level | undefined>();

    const { data, isLoading, error } = useAllCourses(JSON_URL, search, filter);

    return (
        <section className={[styles.allCoursesSection].join(" ")}>
            <LightComponent top={20} right={40} />
            <h2>
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    todos
                </span>{" "}
                los cursos
            </h2>

            <SearchBar setSearch={setSearch} setFilter={setFilter} />

            <DataStateWrapper isLoading={isLoading} error={error}>
                <CoursesDisplay
                    action={true}
                    courses={data ? data : null}
                    display="Row"
                />
            </DataStateWrapper>
        </section>
    );
}

export default AllCoursesSection;
