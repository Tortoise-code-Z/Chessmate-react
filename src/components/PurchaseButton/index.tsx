import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "../Button";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { useCantBuyStore } from "../../hooks/useCantBuyStore";

type Props = {};

function PurchaseButton({}: Props) {
    const { user } = useUserAuthStore();
    const { setState } = useCantBuyStore();

    const cantBuyCourse = () => {
        setState(true);
    };
    const buyCourseAction = () => {};

    return (
        <Button
            propagation={false}
            onClick={user ? buyCourseAction : cantBuyCourse}
        >
            <HiMiniShoppingBag />
            Comprar
        </Button>
    );
}

export default PurchaseButton;
