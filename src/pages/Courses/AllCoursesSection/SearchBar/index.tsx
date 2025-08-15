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
