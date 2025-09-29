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
 * SearchBar - React component that provides search and filter controls for courses.
 *
 * Features:
 * - Includes a `SearchForm` for users to input search queries, updating the search state on submission.
 * - Renders `Filters` buttons to apply predefined filter options, updating the filter state and clearing the search input.
 * - Handles search and filter interactions with callback functions `handleSubmit` and `handleFilterClick`.
 * - Styled with CSS modules for consistent layout and responsive design.
 *
 * Props:
 * - `setSearch`: Function to update the search query state.
 * - `setFilter`: Function to update the filter state.
 * - `filter`: Current filter value (`FilterOptions | undefined`).
 *
 * @returns JSX.Element: A search bar with form input and filter buttons for course selection.
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
