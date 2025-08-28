import Button from "../../../../../components/Button";
import { FILTERS } from "../../../../../consts/general";
import styles from "./Filters.module.css";
import { FilterOptions } from "../../../../../types/types";

type Props = {
    filter: FilterOptions | undefined;
    handleFilterClick: (value: FilterOptions) => void;
};

/**
 * Renders a set of filter buttons for selecting course filters.
 *
 * Features:
 * - Highlights the currently selected filter.
 * - Defaults to "Todos" when no filter is selected.
 *
 * Props:
 * - `filter`: The currently active filter option.
 * - `handleFilterClick`: Callback function invoked with the selected filter when a button is clicked.
 *
 * @returns JSX element containing filter buttons.
 */

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
