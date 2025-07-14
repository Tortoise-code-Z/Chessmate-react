import { JSON_URL } from "../../consts/url";
import useBestSeller from "../../hooks/useBestSellers";
import CoursesColumnDisplay from "../CoursesColumnDisplay";

type Props = {};

function BestSellersSection({}: Props) {
    const { data, isLoading, error } = useBestSeller(JSON_URL);
    return (
        <section>
            <h2>
                Nuestros cursos más<span>vendidos</span>
            </h2>
            <CoursesColumnDisplay action={false} courses={data ? data : null} />
        </section>
    );
}

export default BestSellersSection;
