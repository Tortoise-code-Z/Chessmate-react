import { useParams } from "react-router-dom";
import styles from "./CourseCommentSection.module.css";
import useCourseComments from "../../../hooks/useCourseComments";
import { JSON_URL } from "../../../consts/url";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { AVATAR_DEFAULT_IMAGE } from "../../../consts/images";
import Form from "../../../components/Form";
import InputGroup from "../../../components/InputGroup";
import { FaPaperPlane } from "react-icons/fa";
import {
    commentsSchema,
    commentsSchemaValues,
} from "../../../Schemas/commentsSchema";

type Props = {};

function CourseCommentSection({}: Props) {
    const params = useParams();

    const {
        data: comments,
        isLoading,
        error,
    } = useCourseComments(JSON_URL, Number(params.id));

    const handleSubmit = (data: commentsSchemaValues) => {
        console.log(data.comment);
    };

    return (
        <section className={[styles].join(" ")}>
            <h2>
                Opiniones de los{" "}
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    usuarios
                </span>
            </h2>
            <div>
                <DataStateWrapper isLoading={isLoading} error={error}>
                    <>
                        <ul>
                            {comments?.map((c) => (
                                <li key={c.id}>
                                    <div>
                                        <figure>
                                            <img
                                                src={AVATAR_DEFAULT_IMAGE.image}
                                                alt={c.user.username}
                                                title={c.user.username}
                                                width={
                                                    AVATAR_DEFAULT_IMAGE.width
                                                }
                                                height={
                                                    AVATAR_DEFAULT_IMAGE.height
                                                }
                                            />
                                        </figure>
                                        <p>{c.user.username}</p>
                                    </div>
                                    <p>{c.createdAt}</p>
                                    <p>{c.text}</p>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <div>
                                <p>Deja tu opinion sobre este curso</p>
                                <Form<commentsSchemaValues>
                                    onSubmit={handleSubmit}
                                    schema={commentsSchema}
                                >
                                    <InputGroup<commentsSchemaValues>
                                        name={"comment"}
                                        groupType="submit"
                                        errorMsg={false}
                                        buttonText="Enviar"
                                        buttonSVG={<FaPaperPlane />}
                                        buttonVariant="Complementary"
                                        placeholder="Escribe tu opinión..."
                                    />
                                </Form>
                            </div>
                        </div>
                    </>
                </DataStateWrapper>
            </div>
        </section>
    );
}

export default CourseCommentSection;
