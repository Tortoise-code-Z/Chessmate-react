import { ReactNode } from "react";
import { TitleLevel } from "../../types/types";

type Props = {
    level?: TitleLevel;
    classNames?: string[];
    children: ReactNode;
};

/**
 * Generic heading component that renders an `h1` to `h6` element.
 *
 * - Allows specifying the heading level via the `level` prop.
 * - Supports custom CSS classes and children content.
 *
 * Props:
 * - `level` → Optional heading level (1–6). Defaults to 1.
 * - `classNames` → Optional array of CSS class names.
 * - `children` → Content inside the heading element.
 *
 * @returns An `h1`–`h6` element with the provided content and styling.
 */

function TitleHx({ level = 1, children, classNames = [] }: Props) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag className={[...classNames].join(" ")}>{children}</Tag>;
}

export default TitleHx;
