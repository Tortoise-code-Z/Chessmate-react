import DataStateWrapper from "../../../components/DataStateWrapperProps";
import LightComponent from "../../../components/LightComponent";
import WarningMsg from "../../../components/WarningMsg";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import useDefaultCourseById from "../../../hooks/useDefaultCourseById";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { UseCourseApiType, WarningMsgType } from "../../../types/types";
import { asNumber, asObject } from "../../../utils/general";
import BoardZone from "./BoardZone";
import styles from "./ClassZoneSection.module.css";
import ExplanationTheme from "./ExplanationTheme";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

/**
 * ClassZoneSection - React component that displays the main class zone for a specific course.
 *
 * Features:
 * - Fetches course data by ID for the current user using `useDefaultCourseById` and `useUserAuthStore`.
 * - Handles loading and error states with `DataStateWrapper`.
 * - Shows warnings via `WarningMsg` if any class-related issues are present.
 * - Includes a `LightComponent` for visual decoration.
 * - Renders `ExplanationTheme` for course theme explanations and `BoardZone` for interactive class content.
 * - Manages internal state for current theme index, image slider loading, and class warnings.
 * - Automatically resets the theme index when the course ID changes.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: The course class zone with explanations, interactive board, and warning messages.
 */

function ClassZoneSection({}: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { data, isLoading, error } = useDefaultCourseById(
        DATABASE_KEY,
        asNumber(Number(params.id)),
        asNumber(user?.userID)
    );

    const safeData = asObject<UseCourseApiType>(data);

    const [classWarning, setClassWarning] = useState<WarningMsgType | null>(
        null
    );

    // Index used to indicate what theme you are on
    const [index, setIndex] = useState<number>(1);

    // A loading to avoid flickering in images when changing themes
    const [imageSliderLoading, setImageSliderLoading] =
        useState<boolean>(false);

    useEffect(() => setIndex(1), [params.id]);

    return (
        <section className={[styles.classZoneSection].join(" ")}>
            <LightComponent top={50} right={65} />
            {(classWarning?.emptyMsg || classWarning?.msg) && (
                <WarningMsg
                    msg={
                        classWarning?.emptyMsg
                            ? classWarning.emptyMsg
                            : classWarning.msg
                    }
                />
            )}
            <DataStateWrapper isLoading={isLoading} error={error}>
                <div
                    className={[
                        styles.container,
                        !!classWarning ? styles.classZoneSectionWithMsg : "",
                    ].join(" ")}
                >
                    <ExplanationTheme
                        data={safeData}
                        setIndex={setIndex}
                        index={index}
                        setImageSliderLoading={setImageSliderLoading}
                    />
                    <BoardZone
                        data={safeData}
                        setIndex={setIndex}
                        index={index}
                        imageSliderLoading={imageSliderLoading}
                        setImageSliderLoading={setImageSliderLoading}
                        classWarning={classWarning}
                        setClassWarning={setClassWarning}
                    />
                </div>
            </DataStateWrapper>
        </section>
    );
}

export default ClassZoneSection;
