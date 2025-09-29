import { useState } from "react";
import SearchBar from "./SearchBar";
import {
    CourseJSON,
    FilterOptions,
    IsObtainedCourse,
} from "../../../types/types";
import useAllCourses from "../../../hooks/useAllCourses";
import styles from "./AllCoursesSection.module.css";
import LightComponent from "../../../components/LightComponent";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import CoursesDisplay from "../../../components/CoursesDisplay";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import { FaHandsPraying } from "react-icons/fa6";
import TitleHx from "../../../components/TitleHx";
import { asArray, asNumber } from "../../../utils/general";
import { AnimatedInView } from "../../../components/AnimatedInView";

type Props = {};

/**
 * AllCoursesSection - React component that displays all courses with search and filter functionality.
 *
 * Features:
 * - Fetches all courses using `useAllCourses` with optional search query and filter options.
 * - Prefills user information from `useUserAuthStore` to customize course data if the user is logged in.
 * - Includes a `SearchBar` to allow users to search and filter courses dynamically.
 * - Uses `DataStateWrapper` to handle loading and error states.
 * - Displays courses in a row layout using `CoursesDisplay`, with a fallback message and icon if no courses are found.
 * - Animated entry with `AnimatedInView` and visual decoration via `LightComponent`.
 * - Styled with CSS modules for consistent layout and spacing.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: A section displaying all courses with search, filter, and responsive loading/error handling.
 */

function AllCoursesSection({}: Props) {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<FilterOptions | undefined>();

    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useAllCourses(
        DATABASE_KEY,
        search,
        filter,
        { required: !!user, userID: user ? asNumber(user?.userID) : undefined }
    );

    const safeData = asArray<CourseJSON & IsObtainedCourse>(data);

    return (
        <AnimatedInView config={{ options: { threshold: 0.08 } }}>
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
                    <CoursesDisplay
                        action={true}
                        courses={safeData}
                        display="Row"
                        msg={"No se han encontrado cursos..."}
                        svg={<FaHandsPraying />}
                    />
                </DataStateWrapper>
            </section>
        </AnimatedInView>
    );
}

export default AllCoursesSection;
