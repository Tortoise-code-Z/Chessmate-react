import { ReactNode } from "react";
import { TitleLevel } from "../../types/types";

type Props = {
    level?: TitleLevel;
    children?: ReactNode;
    classNames?: string[];
};

function TitleHx({ level = 1, children, classNames = [] }: Props) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag className={[...classNames].join(" ")}>{children}</Tag>;
}

export default TitleHx;
