import styles from "./ErrorFixedMsg.module.css";

type Props = {
    errorMsg: string;
};

function ErrorFixedMsg({ errorMsg }: Props) {
    return (
        <div className={[styles.errorFixedMsg].join(" ")}>
            {" "}
            <span>{errorMsg}</span>{" "}
        </div>
    );
}

export default ErrorFixedMsg;
