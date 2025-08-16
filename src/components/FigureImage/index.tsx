type Props = {
    src: string;
    alt: string;
    title: string;
    width: number;
    height: number;
    classNames?: string[];
};

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
