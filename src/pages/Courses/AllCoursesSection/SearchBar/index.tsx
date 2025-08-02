import { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";
import { FilterOptions } from "../../../../types/types";
import {
    searchSchema,
    searchSchemaValues,
} from "../../../../Schemas/searchSchema";
import InputGroup from "../../../../components/InputGroup";
import Button from "../../../../components/Button";
import Form from "../../../../components/Form";
import { FaSearch } from "react-icons/fa";

type Props = {
    setSearch: Dispatch<SetStateAction<string>>;
    setFilter: Dispatch<SetStateAction<FilterOptions | undefined>>;
};

function SearchBar({ setSearch, setFilter }: Props) {
    // Refactorizar creando constante con los filtros y tipados en base a estos

    const filters: FilterOptions[] = [
        "Todos",
        "Principiante",
        "Intermedio",
        "Avanzado",
        "Experto",
        "Master",
    ];

    const handleSubmit = (data: searchSchemaValues) => {
        setFilter(undefined);
        setSearch(data.search);
    };

    const handleClick = (value: FilterOptions) => {
        setSearch("");
        setFilter(value);
    };

    return (
        <div className={[styles.searchBar].join(" ")}>
            <Form<searchSchemaValues>
                onSubmit={handleSubmit}
                schema={searchSchema}
            >
                <InputGroup<searchSchemaValues>
                    errorMsg={false}
                    name={"search"}
                    placeholder="Buscar..."
                >
                    <Button variant="Complementary" type="submit">
                        <FaSearch />
                        Buscar
                    </Button>
                </InputGroup>
            </Form>

            <div className={[styles.filters].join(" ")}>
                {filters.map((f) => (
                    <Button
                        onClick={() => handleClick(f)}
                        key={f}
                        variant="Terciary"
                    >
                        {f}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
