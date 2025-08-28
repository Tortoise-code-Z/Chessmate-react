import styles from "./LightComponent.module.css";

type Props = {
    top?: number;
    right?: number;
};

/**
 * Renders a decorative light component positioned absolutely within its container.
 *
 * @param top - Optional top position as a percentage. Defaults to 0.
 * @param right - Optional right position as a percentage. Defaults to 0.
 *
 * @returns The rendered light component element.
 */

function LightComponent({ top = 0, right = 0 }: Props) {
    return (
        <div
            style={{
                top: `${top}%`,
                right: `${right}%`,
            }}
            className={styles.lightComponent}
        ></div>
    );
}

export default LightComponent;
