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
import { AnimatedViewOptions } from "../../types/types";

type AnimatedInViewProps = {
    children: ReactElement<{ className?: string; style?: CSSProperties }>;
    config?: AnimatedViewOptions;
};

/**
 * Wrapper that animates its child element when it enters the viewport.
 *
 * - Uses `IntersectionObserver` (via `useInView`) to detect visibility.
 * - Applies CSS classes from `AnimatedInView.module.css` for transitions.
 * - Supports custom animation options such as direction, duration, delay, and easing.
 * - Ensures only a single valid React element is passed as child.
 *
 * Props:
 * - `children` → Single React element that will be animated.
 * - `config` → Optional. Animation settings (`direction`, `once`, `options`, `duration`, `delay`, `easing`).
 *
 * @returns The child element enhanced with animation styles and behavior.
 */

export const AnimatedInView = ({
    children,
    config = {},
}: AnimatedInViewProps) => {
    const {
        direction = "up",
        once = true,
        options,
        duration = 0.5,
        delay = 0,
        easing = "ease-in-out",
    } = config;

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
