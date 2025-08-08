import styles from "./SuccessFixedMsg.module.css";

type Props = {
    successMsg: string;
};

function SuccessFixedMsg({ successMsg }: Props) {
    return (
        <div className={[styles.successFixedMsg].join(" ")}>
            <span>{successMsg}</span>
        </div>
    );
}

export default SuccessFixedMsg;
