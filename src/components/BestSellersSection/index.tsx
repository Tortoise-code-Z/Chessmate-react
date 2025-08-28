import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useBestSeller from "../../hooks/useBestSellers";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CoursesDisplay from "../CoursesDisplay";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import TitleHx from "../TitleHx";
import styles from "./BestSelletsSection.module.css";

type Props = {
    limit: number;
    display?: "Row" | "Col";
    titleText: string;
    titleTextSpan?: string;
    titleDisplay: "Row" | "Col";
    classNames?: string[];
};

/**
 * Section that displays “Best Seller” courses.
 *
 * - Fetches courses from the database using `useBestSeller`.
 * - Manages loading and error states via `DataStateWrapper`.
 * - Renders courses using `CoursesDisplay`.
 * - Includes decorative elements like the title (`TitleHx`) and light effect (`LightComponent`).
 *
 * Props:
 * - `limit` → Maximum number of courses to display.
 * - `display` → Optional. Layout mode for courses: `"Row"` or `"Col"`.
 * - `titleText` → Main text for the section title.
 * - `titleTextSpan` → Optional. Highlighted text inside the title.
 * - `titleDisplay` → Orientation of the title: `"Row"` or `"Col"`.
 * - `classNames` → Optional. Additional CSS classes for the section.
 *
 * @returns Section with title, courses, and loading/error state management.
 */

function BestSellersSection({
    limit,
    display,
    titleText,
    titleTextSpan,
    titleDisplay,
    classNames = [],
}: Props) {
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useBestSeller(
        DATABASE_KEY,
        limit,
        user?.userID
    );

    return (
        <section
            className={[styles.bestSellersSection, ...classNames].join(" ")}
        >
            <LightComponent top={30} right={45} />

            <TitleHx
                classNames={[
                    titleDisplay === "Col" ? styles.titleCol : styles.titleRow,
                ]}
                level={2}
            >
                {titleText} {titleDisplay === "Row" && " "}
                {titleTextSpan && (
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        {titleTextSpan}
                    </span>
                )}
            </TitleHx>

            <DataStateWrapper isLoading={isLoading} error={error}>
                <CoursesDisplay
                    action={true}
                    courses={data ? data : null}
                    display={display}
                />
            </DataStateWrapper>
        </section>
    );
}

export default BestSellersSection;
