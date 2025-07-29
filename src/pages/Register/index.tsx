import { NavLink } from "react-router-dom";
import { LOGO_IMAGE } from "../../consts/images";
import styles from "./Register.module.css";
import { paths } from "../../consts/paths";
import Form from "../../components/Form";
import {
    registerSchema,
    registerSchemaValues,
} from "../../Schemas/registerSchema";

type Props = {};

function Register({}: Props) {
    return (
        <div className={[styles.register].join(" ")}>
            <NavLink to={`${paths.index}`}>
                <figure>
                    <img
                        src={LOGO_IMAGE.image}
                        alt={LOGO_IMAGE.alt}
                        title="Ir a inicio"
                    />
                </figure>
            </NavLink>
            <Form<registerSchemaValues>
                onSubmit={(data: registerSchemaValues) => {
                    console.log(data);
                }}
                schema={registerSchema}
            >
                <div></div>
            </Form>
        </div>
    );
}

export default Register;
