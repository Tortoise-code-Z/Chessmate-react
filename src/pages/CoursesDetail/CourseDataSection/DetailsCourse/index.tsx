import { ReactNode, useState } from "react";
import { Course, Theme, WarningMsgType } from "../../../../types/types";
import styles from "./DetailsCourse.module.css";
import TitleHx from "../../../../components/TitleHx";
import { DEFAULT_COURSES_VALUES } from "../../../../consts/general";
import SecurityRendering from "../../../../components/SecurityRendering";
import {
    asNumber,
    asString,
    isNumber,
    isString,
} from "../../../../utils/general";
import MsgEmpty from "../../../../components/MsgEmpty";
import WarningMsg from "../../../../components/WarningMsg";

type Props = {
    data: Course | undefined;
    type: "content" | "learn";
    titleContain: ReactNode;
};

/**
 * DetailsCourse component that displays detailed sections of a course, either content or learning objectives.
 *
 * Features:
 * - `TitleHx`: Displays the section title passed via `titleContain`.
 * - Unordered list of themes based on the `type` prop ("content" or "learn").
 * - Detailed description paragraphs corresponding to the selected type.
 *
 * Props:
 * - `data` (Course): The course object containing content and learning information.
 * - `type` ("content" | "learn"): Determines which section of the course to display.
 * - `titleContain` (ReactNode): JSX element or string to be displayed as the section title.
 *
 * @returns JSX element rendering the detailed course section with themes and descriptions.
 */

function DetailsCourse({ data, titleContain, type }: Props) {
    const typeData = type === "content" ? "content" : "toLearn";

    const [warningDetailContent, setWarningDetailContent] =
        useState<WarningMsgType | null>(null);
    const [warningDetailLearn, setWarningDetailLearn] =
        useState<WarningMsgType | null>(null);

    const commonNoCriticalConditions = data?.[typeData]?.themes?.map((t) =>
        isString(t?.title)
    );

    const commonConditions = [
        data?.[typeData]?.themes?.map((t) => isNumber(t?.id)) || false,
        data?.[typeData]?.detailDescription?.map((t) => isString(t)) || false,
    ].flat();

    const commonState = {
        setWarningState:
            typeData === "content"
                ? setWarningDetailContent
                : setWarningDetailLearn,
        warningState:
            typeData === "content" ? warningDetailContent : warningDetailLearn,
    };

    const commonMsg =
        "Algunos datos no se han podido recuperar. Estamos trabajando en ello.";

    const commonEmptyMsg =
        "No se han podido recuperar los datos. Estamos trabajando en ello.";

    return (
        <div className={styles.detailsCourse}>
            <TitleHx level={2}>{titleContain}</TitleHx>

            {(warningDetailContent?.emptyMsg || warningDetailContent?.msg) && (
                <WarningMsg
                    msg={
                        warningDetailContent?.emptyMsg
                            ? warningDetailContent.emptyMsg
                            : warningDetailContent.msg
                    }
                />
            )}

            <ul className={styles.themesList}>
                <SecurityRendering<Omit<Theme, "content">>
                    data={data?.[typeData]?.themes}
                    conditions={commonConditions}
                    noCriticalConditions={commonNoCriticalConditions}
                    state={commonState}
                    msg={commonMsg}
                    msgEmpty={commonEmptyMsg}
                    emptyNode={<MsgEmpty msg="No hay temas para este curso." />}
                >
                    {(theme, index, _canRender) => {
                        return (
                            <li
                                className={
                                    typeData === "content"
                                        ? styles.contentItem
                                        : styles.toLearnItem
                                }
                                key={asNumber(theme?.id) || index}
                            >
                                {asString(theme?.title) ||
                                    DEFAULT_COURSES_VALUES[typeData].themes
                                        .title}
                            </li>
                        );
                    }}
                </SecurityRendering>
            </ul>

            <div className={styles.description}>
                <SecurityRendering<string>
                    data={data?.[typeData]?.detailDescription}
                    conditions={commonConditions}
                    noCriticalConditions={commonNoCriticalConditions}
                    state={commonState}
                    msg={commonMsg}
                    msgEmpty={commonEmptyMsg}
                    sameState={true}
                    emptyNode={<MsgEmpty msg="Sin descripción." />}
                >
                    {(description, index, canRender) => {
                        if (!canRender) return null;
                        return (
                            <p className={styles.descriptionItem} key={index}>
                                {description}
                            </p>
                        );
                    }}
                </SecurityRendering>
            </div>
        </div>
    );
}

export default DetailsCourse;
