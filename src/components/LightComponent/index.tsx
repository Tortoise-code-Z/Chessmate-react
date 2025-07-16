import styles from "./LightComponent.module.css";

type Props = {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
};

function LightComponent({ top = 0, right = 0 }: Props) {
    return (
        <div
            style={{
                top: `${top}%`,
                right: `${right}%`,
            }}
            className={[styles.lightComponent].join(" ")}
        ></div>
    );
}

export default LightComponent;
