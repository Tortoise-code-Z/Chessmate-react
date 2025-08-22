import DataStateWrapper from "../../../components/DataStateWrapperProps";
import {
    contactSchema,
    ContactSchemaValues,
} from "../../../Schemas/contactSchema";
import InputGroup from "../../../components/InputGroup";
import Button from "../../../components/Button";
import { FaPaperPlane } from "react-icons/fa";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import useUserEmail from "../../../hooks/useUserEmail";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import Form from "../../../components/Form";
import styles from "./ContactForm.module.css";
import { useFeedbackMessageStore } from "../../../hooks/useFeedbackMesssageStore";

type Props = {};

function ContactForm({}: Props) {
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useUserEmail(
        DATABASE_KEY,
        user?.userID as number
    );

    const {
        setState: setFeedbackState,
        setType,
        setMsg,
    } = useFeedbackMessageStore();
    return (
        <DataStateWrapper isLoading={isLoading}>
            <Form<ContactSchemaValues>
                schema={contactSchema}
                onSubmit={() => {
                    setFeedbackState(true);
                    setType("success");
                    setMsg("Comentario enviado con éxito");
                }}
                defaultValues={{
                    name: user ? user.username : "",
                    email: user && !error && data ? data : "",
                }}
                classNames={[styles.contactForm]}
            >
                <div>
                    <InputGroup<ContactSchemaValues>
                        name="name"
                        errorMsg={true}
                        inputType="text"
                        label="Nombre"
                        placeholder="Escriba su nombre..."
                        disabled={user ? true : false}
                    />
                    <InputGroup<ContactSchemaValues>
                        name="email"
                        errorMsg={true}
                        inputType="text"
                        label="Correo electrónico"
                        placeholder="Escriba su email..."
                        disabled={user && !error && data ? true : false}
                    />
                    <InputGroup<ContactSchemaValues>
                        name="subject"
                        errorMsg={true}
                        inputType="text"
                        label="Asunto"
                        placeholder="Escriba su asunto..."
                    />

                    <InputGroup<ContactSchemaValues>
                        name="body"
                        errorMsg={true}
                        label="Cuerpo del mensaje"
                        placeholder="Escriba su consulta..."
                        type="textarea"
                    />
                </div>

                <Button type="submit">
                    <FaPaperPlane /> Enviar
                </Button>
            </Form>
        </DataStateWrapper>
    );
}

export default ContactForm;
