import ObtainedTag from "../ObtainedTag";
import PurchaseButton from "../PurchaseButton";

type Props = {
    courseID: number;
    isObtained?: boolean;
};

function PurchaseAction({ isObtained = false, courseID }: Props) {
    return (
        <>
            {isObtained ? (
                <ObtainedTag />
            ) : (
                <PurchaseButton courseID={courseID} />
            )}
        </>
    );
}

export default PurchaseAction;
