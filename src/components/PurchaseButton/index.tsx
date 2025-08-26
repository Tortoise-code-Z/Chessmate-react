import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "../Button";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { useBuyCourse } from "../../hooks/useBuyCourse";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";

type Props = {
    courseID: number;
};

function PurchaseButton({ courseID }: Props) {
    const { user } = useUserAuthStore();
    const { setState, setValue } = useProfessorMsgStore();
    const { mutate, isPending } = useBuyCourse();

    const cantBuyCourse = () => {
        setState(true);
        setValue("cantBuySesion");
    };

    const buyCourseAction = () => {
        mutate({
            courseID: courseID,
            userID: user?.userID as number,
        });
    };

    return (
        <>
            <Button
                propagation={false}
                onClick={user ? buyCourseAction : cantBuyCourse}
            >
                {isPending ? (
                    "Comprando..."
                ) : (
                    <>
                        <HiMiniShoppingBag />
                        Comprar
                    </>
                )}
            </Button>
        </>
    );
}

export default PurchaseButton;
