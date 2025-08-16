import styles from "./Register.module.css";
import { registerSchemaValues } from "../../Schemas/registerSchema";
import { SIGNIN_IMAGE } from "../../consts/images";
import { useRegister } from "../../hooks/useRegister";
import FigureImage from "../../components/FigureImage";
import RegisterForm from "./RegisterForm";

type Props = {};

function Register({}: Props) {
    const { mutate, error, isPending } = useRegister();
    const handleSubmit = (data: registerSchemaValues) => mutate(data);

    return (
        <section className={styles.register}>
            {error && <p className={styles.registerError}>{error.message}</p>}
            <div className={styles.formContainer}>
                <h2>
                    Regístrate
                    <span>
                        ... y <span className={"span-pr-color"}>comienza</span>{" "}
                        tu aventura
                    </span>
                </h2>

                <RegisterForm
                    handleSubmit={handleSubmit}
                    isPending={isPending}
                />
            </div>

            <FigureImage
                classNames={[styles.bccImg]}
                src={SIGNIN_IMAGE.image}
                alt={SIGNIN_IMAGE.alt}
                title={SIGNIN_IMAGE.alt}
                width={SIGNIN_IMAGE.width}
                height={SIGNIN_IMAGE.height}
            />
        </section>
    );
}

export default Register;
