import { DEFAULT_COURSE_IMAGE } from "../../consts/images";
import { AnimatedViewOptions, Images } from "../../types/types";
import { AnimatedInView } from "../AnimatedInView";

type NewType = {
    src: string | undefined;
    alt: string | undefined;
    title: string | undefined;
    width: number | undefined;
    height: number | undefined;
    otherImage?: Images;
    classNames?: string[];
    animatedOptions?: AnimatedViewOptions;
};

type Props = NewType;

/**
 * Component to display an image with optional animation and fallback handling.
 *
 * - Renders a `<figure>` element containing an `<img>` tag.
 * - Uses a default image (`DEFAULT_COURSE_IMAGE`) if no `src` or `otherImage` is provided.
 * - Supports custom width, height, alt text, and title attributes.
 * - Can be wrapped in `AnimatedInView` for entry animations when `animatedOptions` are provided.
 * - Allows additional CSS classes through `classNames`.
 *
 * Props:
 * - `src` → Optional. Image source URL.
 * - `alt` → Optional. Alt text for the image.
 * - `title` → Optional. Title attribute for the image.
 * - `width` → Optional. Width of the image in pixels.
 * - `height` → Optional. Height of the image in pixels.
 * - `otherImage` → Optional. Fallback image object with `image`, `alt`, `width`, and `height`.
 * - `classNames` → Optional. Array of CSS class names to apply to the `<figure>`.
 * - `animatedOptions` → Optional. Animation configuration passed to `AnimatedInView`.
 *
 * @returns A figure element containing an image, optionally animated on entry.
 */

function FigureImage({
    alt,
    height,
    src,
    title,
    width,
    otherImage,
    classNames = [],
    animatedOptions,
}: Props) {
    const image = otherImage ? otherImage : DEFAULT_COURSE_IMAGE;
    const figure = (
        <figure className={[...classNames].join(" ")}>
            <img
                src={src ? src : image.image}
                alt={alt ? alt : image.alt}
                title={title ? title : image.alt}
                width={width ? width : image.width}
                height={height ? height : image.height}
            />
        </figure>
    );

    return (
        <>
            {!!animatedOptions ? (
                <AnimatedInView config={animatedOptions}>
                    {figure}
                </AnimatedInView>
            ) : (
                <>{figure}</>
            )}
        </>
    );
}

export default FigureImage;
