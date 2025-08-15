import Button from "../../../../../components/Button";
import { FILTERS } from "../../../../../consts/general";
import styles from "./Filters.module.css";
import { FilterOptions } from "../../../../../types/types";

type Props = {
    filter: FilterOptions | undefined;
    handleFilterClick: (value: FilterOptions) => void;
};

function Filters({ filter, handleFilterClick }: Props) {
    return (
        <div className={styles.filters}>
            {FILTERS.map((f) => (
                <Button
                    onClick={() => handleFilterClick(f)}
                    key={f}
                    variant={
                        (!filter && f === "Todos") || filter === f
                            ? "Primary"
                            : "Terciary"
                    }
                >
                    {f}
                </Button>
            ))}
        </div>
    );
}

export default Filters;
