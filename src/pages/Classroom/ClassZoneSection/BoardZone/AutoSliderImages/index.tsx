import { Dispatch, useEffect, useRef, useState } from "react";
import { getImage, getImageSize } from "../../../../../utils/images";

type Props = {
    images: string[];
    time: number;
    themeTitle: string;
    setLoading: Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
};

function AutoSliderImages({
    images,
    time,
    themeTitle,
    loading,
    setLoading,
}: Props) {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const indexRef = useRef(0);

    useEffect(() => {
        setImageIndex(0);
        indexRef.current = 0;
        setLoading(false);
    }, [themeTitle, images]);

    useEffect(() => {
        const slider = setInterval(() => {
            const nextImage =
                indexRef.current >= images.length - 1
                    ? 0
                    : indexRef.current + 1;
            setImageIndex(nextImage);
            indexRef.current = nextImage;
        }, time);

        return () => clearInterval(slider);
    }, [time, themeTitle]);

    if (loading)
        return (
            <img
                src={getImage(images[0], ["defaultCourses"])}
                alt={themeTitle}
                title={themeTitle}
                width={getImageSize(images[0], "width")}
                height={getImageSize(images[0], "height")}
            />
        );

    return (
        <img
            src={getImage(images[imageIndex], ["defaultCourses"])}
            alt={themeTitle}
            title={themeTitle}
            width={getImageSize(images[imageIndex], "width")}
            height={getImageSize(images[imageIndex], "height")}
        />
    );
}

export default AutoSliderImages;
