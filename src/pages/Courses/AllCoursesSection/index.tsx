import { useState } from "react";
import SearchBar from "./SearchBar";
import { FilterOptions } from "../../../types/types";
import useAllCourses from "../../../hooks/useAllCourses";
import styles from "./AllCoursesSection.module.css";
import LightComponent from "../../../components/LightComponent";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import CoursesDisplay from "../../../components/CoursesDisplay";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";

type Props = {};

function AllCoursesSection({}: Props) {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<FilterOptions | undefined>();
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useAllCourses(
        DATABASE_KEY,
        search,
        filter,
        user?.userID
    );

    return (
        <section className={styles.allCoursesSection}>
            <LightComponent top={20} right={40} />
            <h2>
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    todos
                </span>{" "}
                los cursos
            </h2>

            <SearchBar
                setSearch={setSearch}
                setFilter={setFilter}
                filter={filter}
            />

            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg={error?.message}
            >
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
