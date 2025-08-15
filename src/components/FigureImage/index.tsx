type Props = {
    src: string;
    alt: string;
    title: string;
    width: number;
    height: number;
};

function FigureImage({ alt, height, src, title, width }: Props) {
    return (
        <figure>
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
