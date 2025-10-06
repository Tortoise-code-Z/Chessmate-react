import { Helmet } from "react-helmet-async";
import { AnimatedInView } from "../../components/AnimatedInView";
import FeedbackListener from "../../components/FeedbackListener";
import FeedbackMessage from "../../components/FeedbackMessage";
import ProfessorListener from "../../components/ProfessorListenner";
import TitleHx from "../../components/TitleHx";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

type Props = {};

/**
 * Contact - React component that renders the contact page with a form and feedback system.
 *
 * Features:
 * - Includes `FeedbackListener` and `FeedbackMessage` to handle and display user feedback.
 * - Shows a section with a heading and description encouraging users to submit inquiries.
 * - Uses `AnimatedInView` for smooth entry animation of the contact information.
 * - Contains `ContactForm` for users to submit questions or messages directly.
 * - Styled with CSS modules for consistent layout and appearance.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: The contact page including feedback handling and a submission form.
 */

function Contact({}: Props) {
    return (
        <>
            <Helmet>
                <title>Chessmate - Contacto</title>
            </Helmet>
            <FeedbackListener />
            <ProfessorListener />

            <FeedbackMessage />

            <section className={styles.contact}>
                <AnimatedInView config={{ direction: "right" }}>
                    <div className={styles.imageContact}>
                        <TitleHx level={1}>
                            Envíanos tu duda de{" "}
                            <span className={"span-pr-color"}>
                                forma directa
                            </span>
                        </TitleHx>
                        <p>
                            ¡Nuestro equipo se encargará de contestarla lo antes
                            posible!
                        </p>
                    </div>
                </AnimatedInView>
                <ContactForm />
            </section>
        </>
    );
}

export default Contact;
