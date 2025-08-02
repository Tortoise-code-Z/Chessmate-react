import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "../Button";
import ObtainedTag from "../ObtainedTag";

type Props = {
    isObtained?: boolean;
};

function PurchaseAction({ isObtained = false }: Props) {
    return (
        <>
            {isObtained ? (
                <ObtainedTag />
            ) : (
                <Button
                    propagation={false}
                    onClick={() => console.log("Comprando...")}
                >
                    <HiMiniShoppingBag />
                    Comprar
                </Button>
            )}
        </>
    );
}

export default PurchaseAction;
