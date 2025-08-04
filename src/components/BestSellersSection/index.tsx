import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useBestSeller from "../../hooks/useBestSellers";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CoursesDisplay from "../CoursesDisplay";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import styles from "./BestSelletsSection.module.css";

type Props = {
    limit: number;
    display?: "Row" | "Col";
    titleText: string;
    titleTextSpan?: string;
    titleDisplay: "Row" | "Col";
    classNames?: string[];
};

function BestSellersSection({
    limit,
    display,
    titleText,
    titleTextSpan,
    titleDisplay,
    classNames,
}: Props) {
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useBestSeller(
        DATABASE_KEY,
        limit,
        user?.userID
    );

    return (
        <section
            className={[styles.bestSellersSection, ...(classNames ?? "")].join(
                " "
            )}
        >
            <LightComponent top={30} right={45} />

            <h2
                className={[
                    titleDisplay === "Col" ? styles.titleCol : styles.titleRow,
                ].join(" ")}
            >
                {titleText} {titleDisplay === "Row" && " "}
                {titleTextSpan && (
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        {titleTextSpan}
                    </span>
                )}
            </h2>

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
