import { AnimatedViewOptions } from "../../types/types";
import { AnimatedInView } from "../AnimatedInView";
import ReactPlayer from "react-player";

type AnimatedPlayerProps = {
    src: string | undefined;
    className?: string;
    animatedOptions?: AnimatedViewOptions;
};

export function AnimatedPlayer({
    src,
    className,
    animatedOptions,
}: AnimatedPlayerProps) {
    const player = <ReactPlayer src={src} className={className} controls />;

    return animatedOptions ? (
        <AnimatedInView config={animatedOptions}>{player}</AnimatedInView>
    ) : (
        player
    );
}
