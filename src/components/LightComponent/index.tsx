import styles from "./LightComponent.module.css";

type Props = {
    top?: number;
    right?: number;
};

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
