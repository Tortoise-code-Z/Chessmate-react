import Form from "../../../components/Form";
import { loginSchema, LoginSchemaValues } from "../../../Schemas/loginSchema";
import styles from "./LoginForm.module.css";
import LoginFormContent from "./LoginFormContent";
import LoginFormActions from "./LoginFormActions";

type Props = {
    handleSubmit: (data: LoginSchemaValues) => void;
    isPending: boolean;
};

/**
 * LoginForm - React component that renders the login form with validation and actions.
 *
 * Features:
 * - Uses a generic `Form` component with `loginSchema` for validation.
 * - Handles form submission via `handleSubmit` prop.
 * - Includes `LoginFormContent` for input fields (username and password).
 * - Includes `LoginFormActions` to display submit button and pending state.
 * - Wraps the form with entrance animation from the left.
 *
 * Props:
 * - `handleSubmit`: Function called when the form is submitted with valid data.
 * - `isPending`: Boolean indicating if the login request is in progress.
 *
 * @returns JSX.Element: A validated and animated login form with content and action components.
 */

function LoginForm({ handleSubmit, isPending }: Props) {
    return (
        <Form<LoginSchemaValues>
            classNames={[styles.loginForm]}
            schema={loginSchema}
            onSubmit={handleSubmit}
            animatedOptions={{ direction: "left" }}
        >
            <LoginFormContent />
            <LoginFormActions isPending={isPending} />
        </Form>
    );
}

export default LoginForm;
