import { useLocation } from "react-router-dom";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

type Props = {};

function Contact({}: Props) {
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
                    onClose={() => {
                        setFeedbackState(false);
                    }}
                />
            )}

            <section className={styles.contact}>
                <div className={styles.imageContact}>
                    <TitleHx level={1}>
                        Envíanos tu duda de{" "}
                        <span className={"span-pr-color"}>forma directa</span>
                    </TitleHx>
                    <p>
                        ¡Nuestro equipo se encargará de contestarla lo antes
                        posible!
                    </p>
                </div>
                <ContactForm />
            </section>
        </>
    );
}

export default Contact;
