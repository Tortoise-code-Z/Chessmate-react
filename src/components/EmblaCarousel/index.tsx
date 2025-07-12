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
    slides: T[];
    options?: EmblaOptionsType;
    Component: ComponentType<SlideRendererProps<T>>;
};

const EmblaCarousel = <T,>({ slides, options, Component }: PropType<T>) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 }),
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
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((data, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <Component data={data} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <PrevButton
                onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
                disabled={prevBtnDisabled}
            />

            <NextButton
                onClick={() => onAutoplayButtonClick(onNextButtonClick)}
                disabled={nextBtnDisabled}
            />

            <button
                className="embla__play"
                onClick={toggleAutoplay}
                type="button"
            >
                {autoplayIsPlaying ? "Stop" : "Start"}
            </button>
        </div>
    );
};

export default EmblaCarousel;
