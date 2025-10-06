import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "../Button";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { useBuyCourse } from "../../hooks/useBuyCourse";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import { FaExclamationTriangle } from "react-icons/fa";
import { asBoolean, isBoolean, isNumber } from "../../utils/general";
import { useLocation } from "react-router-dom";

type Props = {
    courseID: number | undefined | null;
    canBuy?: boolean;
    disabled?: boolean;
    isObtained?: boolean;
};

/**
 * Button component to handle course purchase logic.
 *
 * - Checks user authentication and course purchase eligibility before allowing purchase.
 * - If purchase is allowed, calls `useBuyCourse` mutation with `courseID` and `userID`.
 * - If purchase is not allowed, triggers professor messages for guidance:
 *   - User not logged in → `cantCommentSesion`.
 *   - Invalid course ID → `noID`.
 *   - Course already obtained → `isObtained`.
 *   - Course cannot be bought due to missing price → `noPrice`.
 * - Displays a loading state (`Comprando...`) while the purchase is pending.
 * - Uses icons `HiMiniShoppingBag` for purchase or `FaExclamationTriangle` for warnings.
 *
 * Props:
 * - `courseID` → ID of the course, can be `undefined` or `null`.
 * - `canBuy` → Optional boolean indicating if purchase is allowed (default: `true`).
 * - `disabled` → Optional boolean to disable the button (default: `false`).
 * - `isObtained` → Optional boolean indicating if the course is already obtained.
 *
 * @returns A button that either initiates the purchase or triggers appropriate warning messages.
 */

function PurchaseButton({
    courseID,
    canBuy = true,
    disabled = false,
    isObtained,
}: Props) {
    const { user } = useUserAuthStore();
    const { setState, setValue, setPath } = useProfessorMsgStore();
    const { mutate, isPending } = useBuyCourse();
    const location = useLocation();

    const cantBuyCourse = () => {
        setState(true);
        setPath(location.pathname);
        if (!user) return setValue("cantCommentSesion");
        if (!isNumber(courseID)) return setValue("noID");
        if (!isBoolean(isObtained)) return setValue("isObtained");
        if (asBoolean(canBuy)) return setValue("noPrice");
    };

    return (
        <Button
            variant={!isBoolean(isObtained) ? "Warning" : "Primary"}
            disabled={disabled}
            propagation={false}
            onClick={
                user &&
                asBoolean(canBuy) &&
                isNumber(courseID) &&
                isBoolean(isObtained)
                    ? () =>
                          mutate({
                              courseID: courseID,
                              userID: user?.userID,
                          })
                    : cantBuyCourse
            }
        >
            {isPending ? (
                "Comprando..."
            ) : (
                <>
                    {isBoolean(isObtained) ? (
                        <HiMiniShoppingBag />
                    ) : (
                        <FaExclamationTriangle />
                    )}
                    Comprar
                </>
            )}
        </Button>
    );
}

export default PurchaseButton;
