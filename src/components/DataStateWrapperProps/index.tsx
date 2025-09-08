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
    paddingErrorLateral?: boolean;
    paddingErrorNavbar?: boolean;
    paddingLoadingNavbar?: boolean;
};

/**
 * DataStateWrapper - A wrapper component that handles loading and error states for async data.
 *
 * Displays a loading component while data is being fetched, an error component if an error occurs,
 * or renders the children when data is successfully loaded.
 *
 * @param isLoading - Boolean indicating if the data is currently loading.
 * @param error - Optional error object to display when an error occurs.
 * @param loadingComponent - Optional custom component to render during loading.
 * @param errorComponent - Optional custom component to render when an error occurs.
 * @param children - Content to render when there is no loading or error state.
 * @param errorMsg - Optional error message to display.
 * @param errorClassName - Optional CSS classes for the error component.
 * @param loadingClassName - Optional CSS classes for the loading component.
 * @param errorButtonAction - Optional action button for the error component.
 * @param errorLinkAction - Optional link action for the error component.
 * @returns A React element representing the current state (loading, error, or children).
 */

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
    paddingErrorLateral = false,
    paddingErrorNavbar = false,
    paddingLoadingNavbar = false,
}: Props) {
    if (isLoading)
        return (
            <>
                {loadingComponent || (
                    <LoadingElement
                        paddingLoadingNavbar={paddingLoadingNavbar}
                        classNames={[...loadingClassName]}
                    />
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
                        paddingLateral={paddingErrorLateral}
                        paddingNavbar={paddingErrorNavbar}
                    />
                )}
            </>
        );
    return <>{children}</>;
}
