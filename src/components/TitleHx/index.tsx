import { forwardRef, ReactNode } from "react";
import { TitleLevel } from "../../types/types";

type Props = {
    level?: TitleLevel;
    classNames?: string[];
    children: ReactNode;
};

/**
 * Component that renders a dynamic heading element (`h1`–`h6`) based on the provided level.
 *
 * - The heading level is determined by the `level` prop.
 * - Allows passing children to display inside the heading.
 * - Accepts optional additional CSS classes via `classNames`.
 *
 * Props:
 * - `level` → Optional. Heading level from 1 to 6. Defaults to 1.
 * - `children` → Content to render inside the heading.
 * - `classNames` → Optional. Array of additional CSS class names.
 *
 * @returns A heading element (`h1`–`h6`) with the provided content and classes.
 */

function TitleHx({ level = 1, children, classNames = [] }: Props) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag className={[...classNames].join(" ")}>{children}</Tag>;
}

export default TitleHx;
