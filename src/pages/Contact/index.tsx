import Button from "../../components/Button";
import DataStateWrapper from "../../components/DataStateWrapperProps";
import Form from "../../components/Form";
import InputGroup from "../../components/InputGroup";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import useUserEmail from "../../hooks/useUserEmail";
import {
    contactSchema,
    ContactSchemaValues,
} from "../../Schemas/contactSchema";
import styles from "./Contact.module.css";
import { FaPaperPlane } from "react-icons/fa";

type Props = {};

function Contact({}: Props) {
    const { user } = useUserAuthStore();
    const { data, isLoading, error } = useUserEmail(
        DATABASE_KEY,
        user?.userID as number
    );

    console.log(data, isLoading, error);

    return (
        <section className={[styles.contact].join(" ")}>
            <div className={[styles.imageContact].join(" ")}>
                <h2>
                    Envíanos tu duda de{" "}
                    <span className={["span-pr-color"].join(" ")}>
                        forma directa
                    </span>
                </h2>
                <p>
                    ¡Nuestro equipo se encargará de contestarla lo antes
                    posible!
                </p>
            </div>
            <DataStateWrapper isLoading={isLoading}>
                <Form<ContactSchemaValues>
                    schema={contactSchema}
                    onSubmit={() => {
                        alert("Mensaje enviado!!");
                    }}
                    defaultValues={{
                        name: user ? user.username : "",
                        email: user && !error && data ? data : "",
                    }}
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
        </section>
    );
}

export default Contact;
