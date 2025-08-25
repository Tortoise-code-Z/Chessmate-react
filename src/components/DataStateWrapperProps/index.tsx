import { ReactNode } from "react";
import ErrorElement from "../ErrorElement";
import LoadingElement from "../LoadingElement";

type Props = {
    isLoading: boolean;
    error?: Error | null;
    loadingComponent?: ReactNode;
    errorComponent?: ReactNode;
    children: ReactNode;
    errorMsg?: string;
    errorClassName?: string[];
    loadingClassName?: string[];
    errorButtonAction?: {
        text: string;
        onClick: () => void;
    };
    errorLinkAction?: {
        text: string;
        to: string;
    };
};

export default function DataStateWrapper({
    isLoading,
    error,
    loadingComponent,
    errorComponent,
    children,
    errorMsg = "",
    errorClassName = [],
    errorButtonAction,
    errorLinkAction,
    loadingClassName = [],
}: Props) {
    if (isLoading)
        return (
            <>
                {loadingComponent || (
                    <LoadingElement classNames={[...loadingClassName]} />
                )}
            </>
        );
    if (error)
        return (
            <>
                {errorComponent || (
                    <ErrorElement
                        errorMsg={errorMsg}
                        error={error}
                        classNames={errorClassName}
                        buttonAction={errorButtonAction}
                        linkAction={errorLinkAction}
                    />
                )}
            </>
        );
    return <>{children}</>;
}
