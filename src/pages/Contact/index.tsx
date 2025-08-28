import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

type Props = {};

function Contact({}: Props) {
    return (
        <>
            <FeedbackMessage />
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
