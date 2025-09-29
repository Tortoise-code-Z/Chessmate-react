import styles from "./LightComponent.module.css";

type Props = {
    top?: number;
    right?: number;
};

/**
 * Decorative light effect component.
 *
 * - Renders a `<div>` styled to appear as a light or glow element.
 * - Can be positioned using percentage offsets from the top and right.
 * - Uses CSS classes from `LightComponent.module.css`.
 *
 * Props:
 * - `top` → Optional. Vertical position as a percentage from the top (default: `0`).
 * - `right` → Optional. Horizontal position as a percentage from the right (default: `0`).
 *
 * @returns A styled div representing a decorative light element.
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
