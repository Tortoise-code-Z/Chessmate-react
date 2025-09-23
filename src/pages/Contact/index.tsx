import FeedbackListener from "../../components/FeedbackListener";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

type Props = {};

/**
 * Contact page component allowing users to send inquiries directly.
 *
 * - Displays a global `FeedbackMessage` component for status messages.
 * - Shows a header and description encouraging users to submit questions.
 * - Renders the `ContactForm` component for submitting inquiries.
 *
 * @returns JSX element representing the Contact page.
 */

function Contact({}: Props) {
    return (
        <>
            <FeedbackListener />
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
