import Form from "../../../components/Form";
import {
    registerSchema,
    registerSchemaValues,
} from "../../../Schemas/registerSchema";
import styles from "./RegisterForm.module.css";
import RegisterFormContent from "./RegisterFormContent";
import RegisterFormActions from "./RegisterFormActions";

type Props = {
    handleSubmit: (data: registerSchemaValues) => void;
    isPending: boolean;
};

/**
 * RegisterForm component that renders the registration form with validation and actions.
 *
 * Features:
 * - Uses a generic Form component with registerSchema for validation.
 * - Provides default values for the form fields.
 * - Includes RegisterFormContent for input fields.
 * - Includes RegisterFormActions for submit button and additional actions.
 *
 * Props:
 * - handleSubmit: Function called when the form is submitted with valid data.
 * - isPending: Boolean indicating if the registration request is in progress.
 *
 * @returns JSX element rendering the complete registration form with content and actions.
 */

function RegisterForm({ handleSubmit, isPending }: Props) {
    return (
        <Form<registerSchemaValues>
            onSubmit={handleSubmit}
            schema={registerSchema}
            defaultValues={{
                title: "Sin título",
            }}
            classNames={[styles.registerForm]}
        >
            <RegisterFormContent />
            <RegisterFormActions isPending={isPending} />
        </Form>
    );
}

export default RegisterForm;
