import { ComponentType } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import "./embla.css";

type SlideRendererProps<T> = {
    data: T;
};

type PropType<T> = {
    slides: T[] | undefined;
    options?: EmblaOptionsType;
    Component: ComponentType<SlideRendererProps<T>>;
    arrows?: boolean;
    playButton?: boolean;
    fitHeight?: boolean;
    playInit?: boolean;
};

const EmblaCarousel = <T,>({
    slides,
    options,
    Component,
    arrows = true,
    playButton = true,
    fitHeight = false,
    playInit = false,
}: PropType<T>) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: playInit, delay: 3000 }),
    ]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
        useAutoplay(emblaApi);

    return (
        <div className={`embla ${fitHeight ? "embla__fitHeight" : ""}`}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides?.map((data, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <Component data={data} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {arrows && (
                <>
                    <PrevButton
                        onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />

                    <NextButton
                        onClick={() => onAutoplayButtonClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </>
            )}
            {playButton && (
                <button
                    className="embla__play"
                    onClick={toggleAutoplay}
                    type="button"
                >
                    {autoplayIsPlaying ? "Stop" : "Start"}
                </button>
            )}
        </div>
    );
};

export default EmblaCarousel;
