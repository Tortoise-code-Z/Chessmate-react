import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "../Button";

type Props = {
    isObtained?: boolean;
};

function PurchaseAction({ isObtained = false }: Props) {
    return (
        <>
            {isObtained ? (
                <p>Obtenido</p>
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
