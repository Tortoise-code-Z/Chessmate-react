import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { FaCommentDots } from "react-icons/fa";

import styles from "./CommentsForm.module.css";
import { UseFormSetValue } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { useProfessorMsgStore } from "../../../hooks/useProfessorMsgStore";
import { useAddComment } from "../../../hooks/useAddComment";
import {
    commentsSchema,
    commentsSchemaValues,
} from "../../../Schemas/commentsSchema";
import Form from "../../Form";
import InputGroup from "../../InputGroup";
import Button from "../../Button";
import { asNumber } from "../../../utils/general";

/**
 * Form component for submitting a new comment on a course.
 *
 * - Uses `react-hook-form` with `commentsSchema` for validation.
 * - Handles user authentication: prompts via `useProfessorMsgStore` if not logged in.
 * - Submits the comment using `useAddComment` hook.
 * - Includes an input field (`InputGroup`) and submit button (`Button`) with loading state.
 *
 * Props:
 * - None.
 *
 * @returns Comment submission form with validation, loading state, and user authentication handling.
 */

function CommentForm() {
    const params = useParams();
    const { user } = useUserAuthStore();
    const { setState, setValue, setPath } = useProfessorMsgStore();
    const { mutate, isPending } = useAddComment();
    const location = useLocation();
    const { t } = useTranslation("courseDetail");
    const { t: tv, i18n } = useTranslation("validation");
    const schema = useMemo(() => commentsSchema(tv), [tv, i18n.language]);

    const handleSubmit = (
        data: commentsSchemaValues,
        helpers?: {
            setValue: UseFormSetValue<commentsSchemaValues>;
        }
    ) => {
        if (!user) {
            setState(true);
            setPath(location.pathname);
            setValue("cantCommentSesion");
            helpers?.setValue("comment", "");
            return;
        }

        mutate({
            userID: asNumber(user?.userID),
            courseID: asNumber(Number(params.id)),
            text: data.comment,
        });

        helpers?.setValue("comment", "");
    };

    return (
        <div className={styles.commentFormContainer}>
            <p>{t("comments.prompt")}</p>
            <Form<commentsSchemaValues>
                onSubmit={handleSubmit}
                schema={schema}
                classNames={[styles.commentForm]}
            >
                <InputGroup<commentsSchemaValues>
                    name={"comment"}
                    errorMsg={false}
                    placeholder={t("comments.placeholder")}
                >
                    <Button type="submit" variant="Complementary">
                        {isPending ? (
                            <>{t("comments.sending")}</>
                        ) : (
                            <>
                                <FaCommentDots />
                                {t("comments.send")}
                            </>
                        )}
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
}

export default CommentForm;
