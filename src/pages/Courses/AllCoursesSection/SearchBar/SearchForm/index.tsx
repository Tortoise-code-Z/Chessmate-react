import { FaSearch } from "react-icons/fa";
import Button from "../../../../../components/Button";
import Form from "../../../../../components/Form";
import InputGroup from "../../../../../components/InputGroup";
import {
    searchSchema,
    searchSchemaValues,
} from "../../../../../Schemas/searchSchema";

type Props = {
    handleSubmit: (data: searchSchemaValues) => void;
};

function SearchForm({ handleSubmit }: Props) {
    return (
        <Form<searchSchemaValues> onSubmit={handleSubmit} schema={searchSchema}>
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
    );
}

export default SearchForm;
