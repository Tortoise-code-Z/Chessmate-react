import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "../Button";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { useBuyCourse } from "../../hooks/useBuyCourse";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";

type Props = {
    courseID: number;
    canBuy?: boolean;
};

/**
 * Component that renders a purchase button for a course.
 *
 * - Uses `useUserAuthStore` to check if the user is logged in.
 * - Uses `useBuyCourse` to handle the purchase mutation.
 * - Uses `useProfessorMsgStore` to show a message if the user is not logged in.
 * - Displays a loading state ("Comprando...") while the purchase is pending.
 *
 * Props:
 * - `courseID` → The ID of the course to be purchased.
 *
 * @returns A button that either triggers a purchase or prompts the user to log in.
 */

function PurchaseButton({ courseID, canBuy = true }: Props) {
    const { user } = useUserAuthStore();
    const { setState, setValue } = useProfessorMsgStore();
    const { mutate, isPending } = useBuyCourse();

    const cantBuyCourse = () => {
        setState(true);
        if (!canBuy) setValue("noPrice");
        if (!user) setValue("cantCommentSesion");
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
                onClick={user && canBuy ? buyCourseAction : cantBuyCourse}
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
