import { JSON_URL } from "../../consts/url";
import useBestSeller from "../../hooks/useBestSellers";
import CoursesColumnDisplay from "../CoursesColumnDisplay";
import DataStateWrapper from "../DataStateWrapperProps";
import LightComponent from "../LightComponent";
import styles from "./BestSelletsSection.module.css";

type Props = {};

function BestSellersSection({}: Props) {
    const { data, isLoading, error } = useBestSeller(JSON_URL);

    return (
        <section className={[styles.bestSellersSection].join(" ")}>
            <LightComponent top={30} right={45} />

            <h2>
                Nuestros cursos más
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    vendidos
                </span>
            </h2>
            <DataStateWrapper isLoading={isLoading} error={error}>
                <CoursesColumnDisplay
                    action={true}
                    courses={data ? data : null}
                />
            </DataStateWrapper>
        </section>
    );
}

export default BestSellersSection;
