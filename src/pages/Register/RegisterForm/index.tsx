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
 * RegisterForm - React component that renders the registration form with validation and actions.
 *
 * Features:
 * - Uses a generic `Form` component with `registerSchema` for validation and `registerSchemaValues` for typing.
 * - Provides default form values to ensure safe handling of missing data.
 * - Renders form content via `RegisterFormContent`.
 * - Renders form action buttons via `RegisterFormActions` and handles submission state (`isPending`).
 * - Applies custom styling through CSS modules.
 *
 * Props:
 * - `handleSubmit`: Function called with form data when the form is submitted.
 * - `isPending`: Boolean indicating if the form submission is in progress.
 *
 * @returns JSX.Element: A validated registration form with content and actions.
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
