import { FaChevronDown } from "react-icons/fa";
import styles from "./ThemeButton.module.css";
import { Dispatch, SetStateAction } from "react";
import Button from "../../../../../../components/Button";
import { Theme } from "../../../../../../types/types";

type Props = {
    theme: Theme;
    videosIndex: number | null;
    setVideosIndex: Dispatch<SetStateAction<number | null>>;
};

function ThemeButton({ setVideosIndex, theme, videosIndex }: Props) {
    return (
        <Button
            classNames={[styles.themeBtn]}
            variant={videosIndex === theme.id ? "Primary" : "Secondary"}
            key={theme.id}
            onClick={() =>
                videosIndex === theme.id
                    ? setVideosIndex(null)
                    : setVideosIndex(theme.id)
            }
        >
            <div className={[styles.themeData].join(" ")}>
                <p className={[styles.themeTitle].join(" ")}>{theme.title}</p>
                <p className={[styles.themeDescription].join(" ")}>
                    {theme.description}
                </p>
            </div>
            <FaChevronDown
                style={{
                    transform:
                        videosIndex === theme.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                }}
            />
        </Button>
    );
}

export default ThemeButton;
