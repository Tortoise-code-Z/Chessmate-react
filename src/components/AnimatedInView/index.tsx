import {
    ReactElement,
    cloneElement,
    isValidElement,
    useEffect,
    useState,
    CSSProperties,
} from "react";
import styles from "./AnimatedInView.module.css";
import { useInView } from "../../hooks/useInView";

type AnimatedInViewProps = {
    children: ReactElement<{ className?: string; style?: CSSProperties }>;
    direction?: "up" | "down" | "left" | "right";
    once?: boolean;
    options?: IntersectionObserverInit;
    duration?: number;
    delay?: number;
    easing?: string;
};

export const AnimatedInView = ({
    children,
    direction = "up",
    once = true,
    options,
    duration = 0.6,
    delay = 0,
    easing = "ease-in-out",
}: AnimatedInViewProps) => {
    const { ref, isInView } = useInView<HTMLElement>(options);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        if (isInView) setHasBeenVisible(true);
    }, [isInView]);

    const show = once ? hasBeenVisible : isInView;

    if (!isValidElement(children)) {
        console.warn("AnimatedInView solo acepta un único elemento como hijo");
        return null;
    }

    return cloneElement(children as React.ReactElement<any>, {
        ref,
        className: `${styles.base} ${
            show
                ? styles[`visible_${direction}`]
                : styles[`hidden_${direction}`]
        } ${children.props.className ?? ""}`,
        style: {
            transitionDuration: `${duration}s`,
            transitionDelay: `${delay}s`,
            transitionTimingFunction: easing,
            ...children.props.style,
        },
    });
};
