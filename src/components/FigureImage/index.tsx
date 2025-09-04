import { DEFAULT_COURSE_IMAGE } from "../../consts/images";
import { Images } from "../../types/types";

type NewType = {
    src: string | undefined;
    alt: string | undefined;
    title: string | undefined;
    width: number | undefined;
    height: number | undefined;
    otherImage?: Images;
    classNames?: string[];
};

type Props = NewType;

/**
 * FigureImage - Component to render an image inside a <figure> element.
 *
 * @param src - The source URL of the image.
 * @param alt - The alt text for the image.
 * @param title - The title attribute for the image.
 * @param width - The width of the image in pixels.
 * @param height - The height of the image in pixels.
 * @param classNames - Optional array of additional CSS class names to apply to the figure.
 * @returns A React element containing the image wrapped in a <figure> element.
 */

function FigureImage({
    alt,
    height,
    src,
    title,
    width,
    otherImage,
    classNames = [],
}: Props) {
    const image = otherImage ? otherImage : DEFAULT_COURSE_IMAGE;

    return (
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
}

export default FigureImage;
