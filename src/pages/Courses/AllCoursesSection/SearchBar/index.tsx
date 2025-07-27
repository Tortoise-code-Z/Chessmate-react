import { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";
import { Level } from "../../../../types/types";
import {
    searchSchema,
    searchSchemaValues,
} from "../../../../Schemas/searchSchema";
import InputGroup from "../../../../components/InputGroup";
import Button from "../../../../components/Button";
import Form from "../../../../components/Form";

type Props = {
    setSearch: Dispatch<SetStateAction<string>>;
    setFilter: Dispatch<SetStateAction<Level | undefined>>;
};

function SearchBar({ setSearch, setFilter }: Props) {
    const filters: Level[] = [
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

    const handleClick = (value: Level) => {
        setSearch("");
        setFilter(value);
    };

    return (
        <div className={[styles.searchBar].join(" ")}>
            <Form<searchSchemaValues>
                onSubmit={handleSubmit}
                schema={searchSchema}
            >
                <InputGroup
                    errorMsg={false}
                    name={"search"}
                    groupType="search"
                />
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
