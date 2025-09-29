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
 * SearchForm - React component that renders a search input form for courses.
 *
 * Features:
 * - Uses a `Form` component with validation via `searchSchema`.
 * - Includes an `InputGroup` for the search field with a submit button.
 * - Submit button displays a search icon (`FaSearch`) and triggers the provided `handleSubmit` callback.
 * - Styled for inline layout with proper form controls.
 *
 * Props:
 * - `handleSubmit`: Function called with the search data when the form is submitted.
 *
 * @returns JSX.Element: A validated search form with a submit button for course searches.
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
