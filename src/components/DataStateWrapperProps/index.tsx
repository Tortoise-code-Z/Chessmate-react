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
};

export default function DataStateWrapper({
    isLoading,
    error,
    loadingComponent,
    errorComponent,
    children,
    errorMsg = "",
}: Props) {
    if (isLoading) return <>{loadingComponent || <LoadingElement />}</>;
    if (error)
        return (
            <>
                {errorComponent || (
                    <ErrorElement errorMsg={errorMsg} error={error} />
                )}
            </>
        );
    return <>{children}</>;
}
