import { asBoolean } from "../../utils/general";
import ObtainedTag from "../ObtainedTag";
import PurchaseButton from "../PurchaseButton";

type Props = {
    courseID: number | undefined | null;
    isObtained?: boolean;
    canBuy?: boolean;
    disabled?: boolean;
};

/**
 * Component to handle course purchase actions.
 *
 * - Checks if a course is already obtained using `asBoolean`.
 * - Renders `ObtainedTag` if the course is obtained.
 * - Otherwise, renders `PurchaseButton` with the provided `courseID`, `canBuy`, and `disabled` props.
 *
 * Props:
 * - `courseID` → ID of the course, can be `undefined` or `null`.
 * - `isObtained` → Optional boolean indicating if the course is already obtained.
 * - `canBuy` → Optional boolean determining if the course can be purchased (default: `true`).
 * - `disabled` → Optional boolean to disable the purchase button (default: `false`).
 *
 * @returns Either an obtained tag or a purchase button based on course status.
 */

function PurchaseAction({
    isObtained,
    courseID,
    canBuy = true,
    disabled = false,
}: Props) {
    return (
        <>
            {asBoolean(isObtained) ? (
                <ObtainedTag />
            ) : (
                <PurchaseButton
                    disabled={disabled}
                    canBuy={canBuy}
                    courseID={courseID}
                    isObtained={isObtained}
                />
            )}
        </>
    );
}

export default PurchaseAction;
