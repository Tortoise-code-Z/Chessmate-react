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
import TitleHx from "../../../components/TitleHx";

type Props = {};

/**
 * Section component that displays all available courses with search and filter functionality.
 *
 * Features:
 * - Light decorative component positioned top-right.
 * - Title highlighting "All Courses".
 * - `SearchBar`: Allows users to search courses and apply filter options.
 * - `DataStateWrapper`: Handles loading and error states when fetching courses.
 * - `CoursesDisplay`: Displays the courses in a row layout when data is available.
 * - Fallback message with icon when no courses are found.
 *
 * State:
 * - `search`: Current search query string.
 * - `filter`: Current filter option selected by the user.
 *
 * Hooks:
 * - `useAllCourses`: Fetches all courses according to the search and filter criteria.
 * - `useUserAuthStore`: Retrieves the current authenticated user's ID.
 *
 * Props: none
 *
 * @returns JSX element rendering the complete "All Courses" section.
 */

function AllCoursesSection({}: Props) {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<FilterOptions | undefined>();
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useAllCourses(
        DATABASE_KEY,
        search,
        filter,
        user?.userID as number
    );

    return (
        <section className={styles.allCoursesSection}>
            <LightComponent top={20} right={40} />
            <TitleHx level={2}>
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    todos
                </span>{" "}
                los cursos
            </TitleHx>

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
