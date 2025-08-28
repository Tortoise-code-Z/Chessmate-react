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

/**
 * SearchForm component
 *
 * Renders a form with an input field and a submit button for performing search queries.
 * Uses a schema for validation and integrates with the parent component via `handleSubmit`.
 *
 * Props:
 * - `handleSubmit` → Function called with the search data when the form is submitted.
 *
 * @returns JSX element containing the search input and submit button.
 */

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
