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
 * Wrapper component to handle loading and error states for its children.
 *
 * - Displays a loading component when `isLoading` is `true`.
 * - Displays an error component when `error` is present.
 * - Renders children when not loading and no error exists.
 * - Supports custom loading and error components, as well as styling options.
 * - Allows optional actions on the error state via buttons or links.
 *
 * Props:
 * - `isLoading` → Boolean indicating if the content is loading.
 * - `error` → Optional. Error object to display when present.
 * - `loadingComponent` → Optional. Custom component to render during loading.
 * - `errorComponent` → Optional. Custom component to render on error.
 * - `children` → Content to render when not loading and no error occurs.
 * - `errorMsg` → Optional. Custom error message (default: empty string).
 * - `errorClassName` → Optional. Array of CSS class names for error styling.
 * - `loadingClassName` → Optional. Array of CSS class names for loading styling.
 * - `errorButtonAction` → Optional. Button action with `text` and `onClick` for the error state.
 * - `errorLinkAction` → Optional. Link action with `text` and `to` for the error state.
 * - `paddingErrorLateral` → Optional. Adds lateral padding to the error component (default: `false`).
 * - `paddingErrorNavbar` → Optional. Adds top padding to accommodate the navbar in the error component (default: `false`).
 * - `paddingLoadingNavbar` → Optional. Adds top padding to accommodate the navbar in the loading component (default: `false`).
 *
 * @returns The children elements or appropriate loading/error components based on state.
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
