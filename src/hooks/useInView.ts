import { useEffect, useRef, useState } from "react";

/**
 * useInView - Custom React hook to detect when an element is visible in the viewport.
 *
 * This hook:
 * - Uses the Intersection Observer API to track visibility of a DOM element.
 * - Updates a boolean state `isInView` when the element enters or leaves the viewport.
 * - Accepts custom IntersectionObserver options such as `threshold`, `root`, and `rootMargin`.
 *
 * @template T - Type of the HTML element to observe (e.g., HTMLDivElement, HTMLButtonElement).
 * @param options - Optional IntersectionObserverInit configuration.
 *
 * @returns An object containing:
 * - `ref` - React ref to attach to the target element.
 * - `isInView` - Boolean flag indicating whether the element is currently in view.
 */

export function useInView<T extends HTMLElement>(
    options?: IntersectionObserverInit
) {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                });
            },
            { threshold: 0.3, ...options }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return { ref, isInView };
}
