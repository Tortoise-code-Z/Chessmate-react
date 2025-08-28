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
 * LoginForm component wraps the login fields and actions inside a validated form.
 *
 * Features:
 * - Uses a generic `Form` component with `loginSchema` for validation.
 * - Renders the main content of the form (`LoginFormContent`).
 * - Renders form actions (submit button) via `LoginFormActions`.
 *
 * Props:
 * - `handleSubmit(data: LoginSchemaValues)`: Callback executed on valid form submission.
 * - `isPending`: Boolean indicating if a login request is currently in progress.
 *
 * @returns JSX element rendering a validated login form.
 */

function LoginForm({ handleSubmit, isPending }: Props) {
    return (
        <Form<LoginSchemaValues>
            classNames={[styles.loginForm]}
            schema={loginSchema}
            onSubmit={handleSubmit}
        >
            <LoginFormContent />
            <LoginFormActions isPending={isPending} />
        </Form>
    );
}

export default LoginForm;
