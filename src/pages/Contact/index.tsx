import FeedbackMessage from "../../components/FeedbackMessage";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

type Props = {};

function Contact({}: Props) {
    const {
        state: feedBackState,
        msg,
        setState: setFeedbackState,
        type,
    } = useFeedbackMessageStore();
    return (
        <>
            {feedBackState && (
                <FeedbackMessage
                    onClose={() => setFeedbackState(false)}
                    msg={msg}
                    type={type}
                />
            )}
            (
            <section className={styles.contact}>
                <div className={styles.imageContact}>
                    <h2>
                        Envíanos tu duda de{" "}
                        <span className={"span-pr-color"}>forma directa</span>
                    </h2>
                    <p>
                        ¡Nuestro equipo se encargará de contestarla lo antes
                        posible!
                    </p>
                </div>
                <ContactForm />
            </section>
            )
        </>
    );
}

export default Contact;
