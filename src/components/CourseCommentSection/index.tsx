import styles from "./CourseCommentSection.module.css";
import UsersCommentBox from "./UsersCommentsBox";
import CommentForm from "./CommentsForm";
import TitleHx from "../TitleHx";
import LightComponent from "../LightComponent";
import { AnimatedInView } from "../AnimatedInView";

type Props = {};

/**
 * CourseCommentSection component.
 *
 * - Displays a section containing user comments for a course.
 * - Includes a decorative light element (`LightComponent`) and a section title (`TitleHx`).
 * - Renders the list of user comments (`UsersCommentBox`) and the comment submission form (`CommentForm`).
 *
 * Props:
 * - None
 *
 * @returns A section element containing user comments and a comment form.
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
