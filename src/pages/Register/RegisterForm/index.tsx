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
