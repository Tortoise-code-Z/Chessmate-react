import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "../Button";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { useBuyCourse } from "../../hooks/useBuyCourse";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import { FaExclamationTriangle } from "react-icons/fa";

type Props = {
    courseID: number | undefined | null;
    canBuy?: boolean;
    disabled?: boolean;
    isObtained?: boolean;
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

function PurchaseButton({
    courseID,
    canBuy = true,
    disabled = false,
    isObtained,
}: Props) {
    const { user } = useUserAuthStore();
    const { setState, setValue } = useProfessorMsgStore();
    const { mutate, isPending } = useBuyCourse();

    const cantBuyCourse = () => {
        setState(true);
        if (typeof isObtained !== "boolean") return setValue("isObtained");
        if (!courseID) return setValue("noID");
        if (!canBuy) return setValue("noPrice");
        if (!user) return setValue("cantCommentSesion");
    };

    return (
        <>
            <Button
                variant={
                    typeof isObtained !== "boolean" ? "Warning" : "Primary"
                }
                disabled={disabled}
                propagation={false}
                onClick={
                    user &&
                    canBuy &&
                    courseID &&
                    typeof isObtained === "boolean"
                        ? () =>
                              mutate({
                                  courseID: courseID,
                                  userID: user?.userID as number,
                              })
                        : cantBuyCourse
                }
            >
                {isPending ? (
                    "Comprando..."
                ) : (
                    <>
                        {typeof isObtained === "boolean" ? (
                            <HiMiniShoppingBag />
                        ) : (
                            <FaExclamationTriangle />
                        )}
                        Comprar
                    </>
                )}
            </Button>
        </>
    );
}

export default PurchaseButton;
