import { AnimatedViewOptions } from "../../types/types";
import { getVideo } from "../../utils/images";
import { AnimatedInView } from "../AnimatedInView";
import ReactPlayer from "react-player";

type AnimatedPlayerProps = {
    src: string | undefined;
    className?: string;
    animatedOptions?: AnimatedViewOptions;
};

/**
 * Video player component with optional entry animation.
 *
 * - Renders a `ReactPlayer` with the given video source.
 * - Wraps the player in `AnimatedInView` when `animatedOptions` are provided.
 * - Supports additional styling through `className`.
 *
 * Props:
 * - `src` → Video source URL.
 * - `className` → Optional. Additional CSS classes for styling the player.
 * - `animatedOptions` → Optional. Animation settings passed to `AnimatedInView`.
 *
 * @returns A video player with or without entry animation, depending on configuration.
 */

export function AnimatedPlayer({
    src,
    className,
    animatedOptions,
}: AnimatedPlayerProps) {
    const video = (
        <ReactPlayer src={getVideo(src)} className={className} controls />
    );

    return animatedOptions ? (
        <AnimatedInView config={animatedOptions}>{video}</AnimatedInView>
    ) : (
        video
    );
}
