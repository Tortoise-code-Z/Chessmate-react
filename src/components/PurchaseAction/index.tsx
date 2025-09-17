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
 * Component that displays either a tag indicating the course has been obtained
 * or a purchase button if the course is not yet adquired.
 *
 * Props:
 * - `courseID` → The ID of the course for the purchase button.
 * - `isObtained` → Optional. Determines whether the course has already been obtained. Defaults to false.
 *
 * @returns Either an `ObtainedTag` or a `PurchaseButton` based on the `isObtained` prop.
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
