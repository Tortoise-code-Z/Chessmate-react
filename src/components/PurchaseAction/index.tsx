import ObtainedTag from "../ObtainedTag";
import PurchaseButton from "../PurchaseButton";

type Props = {
    isObtained?: boolean;
};

function PurchaseAction({ isObtained = false }: Props) {
    return <>{isObtained ? <ObtainedTag /> : <PurchaseButton />}</>;
}

export default PurchaseAction;
