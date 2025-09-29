import { useState } from "react";
import SecurityRendering from "../../../../../components/SecurityRendering";
import {
    AuthorCurseData,
    ChessLevel,
    Course,
    IsObtainedCourse,
    WarningMsgType,
} from "../../../../../types/types";
import AuthorsItem from "../AuthorItem";
import styles from "./Authors.module.css";
import WarningMsg from "../../../../../components/WarningMsg";
import AuthorDefault from "../AuthorDefault";
import {
    asNumber,
    isNumber,
    isOnValues,
    isString,
} from "../../../../../utils/general";
import { CHESS_LEVEL } from "../../../../../consts/general";
import MsgEmpty from "../../../../../components/MsgEmpty";

type Props = {
    data: (Course & IsObtainedCourse) | undefined;
};

/**
 * Authors - React component that renders a list of authors for a course.
 *
 * Features:
 * - Uses `SecurityRendering` to ensure each author's data is valid before rendering.
 * - Displays a `WarningMsg` if any author data is missing or invalid.
 * - Falls back to `AuthorDefault` if a specific author's data cannot be safely rendered.
 * - Supports an empty state using `MsgEmpty` when there are no authors.
 * - Validates author data using utility functions `isString`, `isNumber`, and `isOnValues`.
 * - Uses CSS modules for layout and styling of author cards.
 *
 * Props:
 * - `data`: The course object including authors and whether the course is obtained (`Course & IsObtainedCourse`).
 *
 * @returns JSX.Element: A container displaying all course authors safely, with fallbacks and warning messages.
 */

function Authors({ data }: Props) {
    const [authorWarning, setAuthorWarning] = useState<WarningMsgType | null>(
        null
    );
    return (
        <>
            {(authorWarning?.emptyMsg || authorWarning?.msg) && (
                <WarningMsg
                    msg={
                        authorWarning?.emptyMsg
                            ? authorWarning.emptyMsg
                            : authorWarning.msg
                    }
                />
            )}
            <div className={styles.authorsItemsContainer}>
                <SecurityRendering<AuthorCurseData>
                    data={data?.authors}
                    conditions={data?.authors?.map(
                        (a) =>
                            isString(a?.name) &&
                            isNumber(a?.elo) &&
                            !!isOnValues<ChessLevel>(a?.level, CHESS_LEVEL)
                    )}
                    state={{
                        setWarningState: setAuthorWarning,
                        warningState: authorWarning,
                    }}
                    msg="No ha sido posible rescatar la información de algún autor. Pronto lo solucionaremos."
                    emptyNode={<MsgEmpty msg="No hay autores para mostrar." />}
                >
                    {(author, index, canRender) => {
                        if (!canRender)
                            return (
                                <AuthorDefault
                                    key={asNumber(author?.id) || index}
                                />
                            );
                        return (
                            <AuthorsItem
                                key={asNumber(author?.id) || index}
                                author={author}
                            />
                        );
                    }}
                </SecurityRendering>
            </div>
        </>
    );
}

export default Authors;
