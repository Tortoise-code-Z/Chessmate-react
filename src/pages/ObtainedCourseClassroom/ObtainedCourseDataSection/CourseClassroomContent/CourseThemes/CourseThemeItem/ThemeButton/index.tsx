import { FaChevronDown } from "react-icons/fa";
import styles from "./ThemeButton.module.css";
import { Dispatch, SetStateAction } from "react";
import Button from "../../../../../../../components/Button";
import {
    SubthemesUserStatesOC,
    Theme,
    ThemesUserStatesOC,
} from "../../../../../../../types/types";
import TitleHx from "../../../../../../../components/TitleHx";
import {
    DESCRIPTION_DEFAULT_MSG,
    TITLE_DEFAULT_MSG,
} from "../../../../../../../consts/general";
import CheckSvgComponent from "../../../../../../../components/CheckSvgComponent";
import {
    asBoolean,
    asNumber,
    asString,
    isArray,
} from "../../../../../../../utils/general";

type Props = {
    theme: Theme;
    videosIndex: number | null;
    setVideosIndex: Dispatch<SetStateAction<number | null>>;
    disabled?: boolean;
    userThemeData: ThemesUserStatesOC | undefined;
};

/**
 * ThemeButton - Component representing a clickable button for a course theme.
 *
 * Features:
 * - Displays the theme title and description.
 * - Shows the user's progress for the subthemes (e.g., "2 / 5").
 * - Expands/collapses the corresponding `CourseThemeItem` videos section.
 * - Highlights as "Primary" if the theme is currently selected (expanded), otherwise "Secondary".
 * - Displays a checkmark if the user has completed the theme.
 * - Rotates the chevron icon depending on whether the theme is expanded.
 *
 * Props:
 * - `theme`: The Theme object containing title, description, and subthemes.
 * - `videosIndex`: Currently expanded theme's ID (used to control collapse/expand state).
 * - `setVideosIndex`: Function to update the expanded theme.
 * - `disabled`: Optional boolean to disable interaction.
 * - `userThemeData`: Optional object representing the user's progress and completion on this theme.
 *
 * @returns JSX.Element: A styled button with title, description, progress, and chevron.
 */

function ThemeButton({
    setVideosIndex,
    theme,
    videosIndex,
    disabled = false,
    userThemeData,
}: Props) {
    return (
        <Button
            disabled={disabled}
            classNames={[styles.themeBtn, "relative"]}
            variant={
                videosIndex === asNumber(theme?.id) ? "Primary" : "Secondary"
            }
            key={asNumber(theme?.id)}
            onClick={() =>
                videosIndex === asNumber(theme?.id)
                    ? setVideosIndex(null)
                    : setVideosIndex(asNumber(theme?.id) || null)
            }
        >
            <div className={styles.themeData}>
                <div
                    className={[styles.titleAndThemesCompleteContainer].join(
                        " "
                    )}
                >
                    <TitleHx classNames={[styles.themeTitle]} level={3}>
                        {asString(theme?.title) || TITLE_DEFAULT_MSG}
                    </TitleHx>

                    {isArray<SubthemesUserStatesOC>(
                        userThemeData?.subthemes
                    ) && (
                        <p className={[styles.themesCompletedData].join(" ")}>
                            {`${
                                userThemeData.subthemes.filter((s) =>
                                    asBoolean(s?.completed)
                                ).length
                            } / ${userThemeData.subthemes.length}`}
                        </p>
                    )}
                </div>

                <p className={styles.themeDescription}>
                    {asString(theme?.description) || DESCRIPTION_DEFAULT_MSG}
                </p>
            </div>
            <FaChevronDown
                style={{
                    transform:
                        videosIndex === asNumber(theme?.id)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                }}
            />

            {asBoolean(userThemeData?.completed) && (
                <CheckSvgComponent right={99.5} type="percent" />
            )}
        </Button>
    );
}

export default ThemeButton;
