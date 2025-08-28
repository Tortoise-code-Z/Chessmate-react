type Props = {
    src: string;
    alt: string;
    title: string;
    width: number;
    height: number;
    classNames?: string[];
};

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
    classNames = [],
}: Props) {
    return (
        <figure className={[...classNames].join(" ")}>
            <img
                src={src}
                alt={alt}
                title={title}
                width={width}
                height={height}
            />
        </figure>
    );
}

export default FigureImage;
