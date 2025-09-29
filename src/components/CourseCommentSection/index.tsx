import styles from "./CourseCommentSection.module.css";
import UsersCommentBox from "./UsersCommentsBox";
import CommentForm from "./CommentsForm";
import TitleHx from "../TitleHx";
import LightComponent from "../LightComponent";
import { AnimatedInView } from "../AnimatedInView";

type Props = {};

/**
 * Section that displays course comments and a form to submit new ones.
 *
 * - Renders existing user comments using `UsersCommentBox`.
 * - Provides a form for submitting new comments via `CommentForm`.
 * - Includes decorative elements such as a title (`TitleHx`) and light effect (`LightComponent`).
 * - Animates the section into view using `AnimatedInView`.
 *
 * Props:
 * - None.
 *
 * @returns Section with course comments, comment form, and visual decorations.
 */

function CourseCommentSection({}: Props) {
    return (
        <AnimatedInView>
            <section className={styles.courseCommentSection}>
                <LightComponent top={80} right={50} />
                <TitleHx level={2}>
                    Opiniones de los{" "}
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        usuarios
                    </span>
                </TitleHx>

                <div className={styles.commentsContainer}>
                    <UsersCommentBox />
                    <CommentForm />
                </div>
            </section>
        </AnimatedInView>
    );
}

export default CourseCommentSection;
