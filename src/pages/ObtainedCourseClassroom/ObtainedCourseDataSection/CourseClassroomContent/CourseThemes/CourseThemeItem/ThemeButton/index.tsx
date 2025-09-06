import { FaChevronDown } from "react-icons/fa";
import styles from "./ThemeButton.module.css";
import { Dispatch, SetStateAction } from "react";
import Button from "../../../../../../../components/Button";
import { Theme } from "../../../../../../../types/types";
import TitleHx from "../../../../../../../components/TitleHx";
import { DEFAULT_COURSES_VALUES } from "../../../../../../../consts/general";

type Props = {
    theme: Theme;
    videosIndex: number | null;
    setVideosIndex: Dispatch<SetStateAction<number | null>>;
    disabled?: boolean;
};

/**
 * ThemeButton component that renders a button for a single course theme.
 *
 * Features:
 * - Displays the theme title and description.
 * - Chevron icon rotates based on whether the theme's videos are expanded.
 * - Toggles the active theme index on click to show or hide associated videos.
 *
 * Props:
 * - theme: Object containing theme details including title and description.
 * - videosIndex: Index of the currently active theme.
 * - setVideosIndex: Function to update the currently active theme index.
 *
 * @returns JSX element rendering a button for a course theme with toggleable video display.
 */

function ThemeButton({
    setVideosIndex,
    theme,
    videosIndex,
    disabled = false,
}: Props) {
    return (
        <Button
            disabled={disabled}
            classNames={[styles.themeBtn]}
            variant={
                videosIndex === theme.id && !!theme.id ? "Primary" : "Secondary"
            }
            key={theme.id}
            onClick={() =>
                videosIndex === theme.id && !!theme.id
                    ? setVideosIndex(null)
                    : setVideosIndex(theme.id)
            }
        >
            <div className={styles.themeData}>
                <TitleHx classNames={[styles.themeTitle]} level={3}>
                    {theme?.title || DEFAULT_COURSES_VALUES.title}
                </TitleHx>
                <p className={styles.themeDescription}>
                    {theme?.description ||
                        DEFAULT_COURSES_VALUES.shortDescription}
                </p>
            </div>
            <FaChevronDown
                style={{
                    transform:
                        videosIndex === theme.id && !!theme.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                }}
            />
        </Button>
    );
}

export default ThemeButton;
