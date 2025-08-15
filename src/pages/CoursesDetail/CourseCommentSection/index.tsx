import styles from "./CourseCommentSection.module.css";
import UsersCommentBox from "./UsersCommentsBox";
import CommentForm from "./CommentsForm";

type Props = {};

function CourseCommentSection({}: Props) {
    return (
        <section className={[styles.courseCommentSection].join(" ")}>
            <h2>
                Opiniones de los{" "}
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    usuarios
                </span>
            </h2>
            <div className={[styles.commentsContainer].join(" ")}>
                <UsersCommentBox />
                <CommentForm />
            </div>
        </section>
    );
}

export default CourseCommentSection;
