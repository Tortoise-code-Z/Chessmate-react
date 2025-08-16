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
import { FaHandsPraying } from "react-icons/fa6";

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
                {data && data.length > 0 ? (
                    <CoursesDisplay
                        action={true}
                        courses={data}
                        display="Row"
                    />
                ) : (
                    <div className={[styles.thereArentCourses].join(" ")}>
                        <p>No se han encontrado cursos...</p>
                        <FaHandsPraying />
                    </div>
                )}
            </DataStateWrapper>
        </section>
    );
}

export default AllCoursesSection;
