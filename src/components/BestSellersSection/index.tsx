import { JSON_URL } from "../../consts/url";
import useBestSeller from "../../hooks/useBestSellers";
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
    const { data, isLoading, error } = useBestSeller(JSON_URL, limit);

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
