import Button from "../../../../../components/Button";
import { FILTERS } from "../../../../../consts/general";
import styles from "./Filters.module.css";
import { FilterOptions } from "../../../../../types/types";

type Props = {
    filter: FilterOptions | undefined;
    handleFilterClick: (value: FilterOptions) => void;
};

/**
 * Filters - React component that renders a set of filter buttons for courses.
 *
 * Features:
 * - Maps over predefined `FILTERS` to render buttons for each filter option.
 * - Highlights the currently active filter using the `Primary` variant; others use `Terciary`.
 * - Calls `handleFilterClick` with the selected filter value when a button is clicked.
 * - Styled with CSS modules for consistent layout and spacing of filter buttons.
 *
 * Props:
 * - `filter`: Current active filter (`FilterOptions | undefined`).
 * - `handleFilterClick`: Function called when a filter button is clicked, receiving the selected filter value.
 *
 * @returns JSX.Element: A horizontal set of filter buttons to refine course listings.
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
