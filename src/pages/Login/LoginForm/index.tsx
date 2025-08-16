import Form from "../../../components/Form";
import { loginSchema, LoginSchemaValues } from "../../../Schemas/loginSchema";
import styles from "./LoginForm.module.css";
import LoginFormContent from "./LoginFormContent";
import LoginFormActions from "./LoginFormActions";

type Props = {
    handleSubmit: (data: LoginSchemaValues) => void;
    isPending: boolean;
};

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
