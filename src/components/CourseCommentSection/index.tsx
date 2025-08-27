import styles from "./CourseCommentSection.module.css";
import UsersCommentBox from "./UsersCommentsBox";
import CommentForm from "./CommentsForm";
import TitleHx from "../TitleHx";

type Props = {};

function CourseCommentSection({}: Props) {
    return (
        <section className={[styles.courseCommentSection].join(" ")}>
            <TitleHx level={2}>
                Opiniones de los{" "}
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    usuarios
                </span>
            </TitleHx>

            <div className={[styles.commentsContainer].join(" ")}>
                <UsersCommentBox />
                <CommentForm />
            </div>
        </section>
    );
}

export default CourseCommentSection;
