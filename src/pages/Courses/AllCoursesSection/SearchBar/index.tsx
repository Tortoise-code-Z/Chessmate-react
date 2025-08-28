import { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";
import { FilterOptions } from "../../../../types/types";
import { searchSchemaValues } from "../../../../Schemas/searchSchema";
import SearchForm from "./SearchForm";
import Filters from "./Filters";

type Props = {
    setSearch: Dispatch<SetStateAction<string>>;
    setFilter: Dispatch<SetStateAction<FilterOptions | undefined>>;
    filter: FilterOptions | undefined;
};

/**
 * Search bar component with integrated search input and filter buttons.
 *
 * Features:
 * - `SearchForm`: Allows users to type a search query and submit it.
 * - `Filters`: Displays available filter options and highlights the active one.
 *
 * Behavior:
 * - Submitting a search clears the filter and updates the search state.
 * - Clicking a filter option clears the search input and updates the filter state.
 *
 * Props:
 * - `setSearch`: Function to update the search query string.
 * - `setFilter`: Function to update the selected filter option.
 * - `filter`: Currently selected filter option.
 *
 * @returns JSX element rendering the search input and filter controls.
 */

function SearchBar({ setSearch, setFilter, filter }: Props) {
    const handleSubmit = (data: searchSchemaValues) => {
        setFilter(undefined);
        setSearch(data.search);
    };

    const handleFilterClick = (value: FilterOptions) => {
        setSearch("");
        setFilter(value);
    };

    return (
        <div className={styles.searchBar}>
            <SearchForm handleSubmit={handleSubmit} />
            <Filters filter={filter} handleFilterClick={handleFilterClick} />
        </div>
    );
}

export default SearchBar;
