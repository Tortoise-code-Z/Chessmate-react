import { FaChevronDown } from "react-icons/fa";
import styles from "./ThemeButton.module.css";
import { Dispatch, SetStateAction } from "react";
import Button from "../../../../../../../components/Button";
import { Theme } from "../../../../../../../types/types";
import TitleHx from "../../../../../../../components/TitleHx";

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
            <div className={styles.themeData}>
                <TitleHx classNames={[styles.themeTitle]} level={3}>
                    {theme.title}
                </TitleHx>
                <p className={styles.themeDescription}>{theme.description}</p>
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
