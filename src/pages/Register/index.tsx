import styles from "./Register.module.css";
import { registerSchemaValues } from "../../Schemas/registerSchema";
import { SIGNIN_IMAGE } from "../../consts/images";
import { useRegister } from "../../hooks/useRegister";
import FigureImage from "../../components/FigureImage";
import RegisterForm from "./RegisterForm";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type Props = {};

function Register({}: Props) {
    const { mutate, isPending } = useRegister();
    const handleSubmit = (data: registerSchemaValues) => mutate(data);
    const {
        state: feedBackState,
        setState: setFeedbackState,
        path,
        setPath,
    } = useFeedbackMessageStore();
    const location = useLocation();

    useEffect(() => {
        setPath("");
    }, [location.pathname]);

    return (
        <>
            {feedBackState && path === location.pathname && (
                <FeedbackMessage
                    position="top"
                    time="fixed"
                    onClose={() => {
                        setFeedbackState(false);
                    }}
                />
            )}
            <section className={styles.register}>
                <div className={styles.formContainer}>
                    <TitleHx classNames={[styles.title]}>
                        Regístrate
                        <span>
                            ... y{" "}
                            <span className={"span-pr-color"}>comienza</span> tu
                            aventura
                        </span>
                    </TitleHx>

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
        </>
    );
}

export default Register;
