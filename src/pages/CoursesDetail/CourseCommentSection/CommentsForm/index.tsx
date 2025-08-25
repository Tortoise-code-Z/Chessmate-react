import { FaCommentDots } from "react-icons/fa";
import Button from "../../../../components/Button";
import Form from "../../../../components/Form";
import InputGroup from "../../../../components/InputGroup";
import {
    commentsSchema,
    commentsSchemaValues,
} from "../../../../Schemas/commentsSchema";
import styles from "./CommentsForm.module.css";
import { UseFormSetValue } from "react-hook-form";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import { useCantCommentStore } from "../../../../hooks/useCantCommentStore";
import { useAddComment } from "../../../../hooks/useAddComment";
import { useParams } from "react-router-dom";

type Props = {};

function CommentForm({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();
    const { setState } = useCantCommentStore();
    const { mutate, isPending } = useAddComment();

    const handleSubmit = (
        data: commentsSchemaValues,
        helpers?: {
            setValue: UseFormSetValue<commentsSchemaValues>;
        }
    ) => {
        if (!user) {
            setState(true);
            helpers?.setValue("comment", "");
            return;
        }

        mutate({
            userID: user?.userID as number,
            courseID: Number(params.id),
            text: data.comment,
        });

        helpers?.setValue("comment", "");
    };

    return (
        <div className={styles.commentFormContainer}>
            <p>Deja tu opinion sobre este curso</p>
            <Form<commentsSchemaValues>
                onSubmit={handleSubmit}
                schema={commentsSchema}
                classNames={[styles.commentForm]}
            >
                <InputGroup<commentsSchemaValues>
                    name={"comment"}
                    errorMsg={false}
                    placeholder="Escribe tu opinión..."
                >
                    <Button type="submit" variant="Complementary">
                        {isPending ? (
                            <>Enviando...</>
                        ) : (
                            <>
                                <FaCommentDots />
                                Enviar
                            </>
                        )}
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
}

export default CommentForm;
