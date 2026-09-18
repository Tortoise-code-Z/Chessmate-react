import { useTranslation } from "react-i18next";
import { ReactNode, useState } from "react";
import { Course, Theme, WarningMsgType } from "../../../../types/types";
import styles from "./DetailsCourse.module.css";
import TitleHx from "../../../../components/TitleHx";

import SecurityRendering from "../../../../components/SecurityRendering";
import { asNumber, asString, isString } from "../../../../utils/general";
import MsgEmpty from "../../../../components/MsgEmpty";
import WarningMsg from "../../../../components/WarningMsg";
import { AnimatedInView } from "../../../../components/AnimatedInView";

type Props = {
    data: Course | undefined;
    type: "content" | "learn";
    titleContain: ReactNode;
};

/**
 * DetailsCourse - React component that displays detailed course information,
 * including themes and descriptive content, with robust error handling.
 *
 * Features:
 * - Wraps content in `AnimatedInView` to animate visibility on scroll.
 * - Displays a section title using `TitleHx` (level 2).
 * - Shows warning messages via `WarningMsg` when data is incomplete or missing.
 * - Uses `SecurityRendering` to safely render course themes and descriptions
 *   with validation checks (`isString`, `isNumber`).
 * - Provides fallback messages (`MsgEmpty`) when no data is available.
 * - Dynamically adjusts rendering based on `type` ("content" or "learn").
 *
 * Props:
 * - `data`: Course object containing course details (may be undefined).
 * - `type`: Determines which part of the course to display ("content" or "learn").
 * - `titleContain`: ReactNode used as the section heading.
 *
 * @returns JSX.Element: A structured view of course themes and descriptions,
 * with animations, validation, and error handling.
 */

function DetailsCourse({ data, titleContain, type }: Props) {
    const typeData = type === "content" ? "content" : "toLearn";
    const { t } = useTranslation("courseDetail");

    const [warningDetailContent, setWarningDetailContent] =
        useState<WarningMsgType | null>(null);
    const [warningDetailLearn, setWarningDetailLearn] =
        useState<WarningMsgType | null>(null);

    const commonNoCriticalConditions = data?.[typeData]?.themes?.map((t) =>
        isString(t?.title)
    );

    const commonConditions = [
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

    const commonMsg = t("details.warning");

    const commonEmptyMsg = t("details.emptyError");

    return (
        <AnimatedInView>
            <div className={styles.detailsCourse}>
                <TitleHx level={2}>{titleContain}</TitleHx>

                {(warningDetailContent?.emptyMsg ||
                    warningDetailContent?.msg) && (
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
                        emptyNode={
                            <MsgEmpty msg={t("details.noThemes")} />
                        }
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
                                        t("common:defaults.title")}
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
                        emptyNode={<MsgEmpty msg={t("details.noDescription")} />}
                    >
                        {(description, index, canRender) => {
                            if (!canRender) return null;
                            return (
                                <p
                                    className={styles.descriptionItem}
                                    key={index}
                                >
                                    {description}
                                </p>
                            );
                        }}
                    </SecurityRendering>
                </div>
            </div>
        </AnimatedInView>
    );
}

export default DetailsCourse;
