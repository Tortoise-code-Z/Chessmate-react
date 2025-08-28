import ObtainedTag from "../ObtainedTag";
import PurchaseButton from "../PurchaseButton";

type Props = {
    courseID: number;
    isObtained?: boolean;
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

function PurchaseAction({ isObtained = false, courseID }: Props) {
    return (
        <>
            {isObtained ? (
                <ObtainedTag />
            ) : (
                <PurchaseButton courseID={courseID} />
            )}
        </>
    );
}

export default PurchaseAction;
