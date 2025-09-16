import { Dispatch, useEffect, useRef, useState } from "react";
import { getImage, getImageSize } from "../../../../../../utils/images";
import { DEFAULT_BOARD_IMAGE } from "../../../../../../consts/images";
import FigureImage from "../../../../../../components/FigureImage";
import { asString, isArray } from "../../../../../../utils/general";

type Props = {
    images: string[] | undefined;
    themeTitle: string | undefined;
    time: number;
    setLoading: Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
};

/**
 * AutoSliderImages component that automatically cycles through an array of images for a course theme.
 *
 * - Automatically transitions between images at the interval specified by `time`.
 * - Resets to the first image when the theme title or image array changes.
 * - Displays a placeholder image while loading to prevent flickering.
 * - Dynamically sets image dimensions using `getImageSize`.
 *
 * Props:
 *  - `images`: Array of image URLs for the current theme.
 *  - `time`: Time in milliseconds between image transitions.
 *  - `themeTitle`: Title of the current theme, used for `alt` and `title` attributes.
 *  - `loading`: Boolean indicating if images are still loading.
 *  - `setLoading`: Function to update the loading state.
 *
 * @returns JSX element displaying the current image of the automatic slider.
 */

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
        let slider: ReturnType<typeof setInterval>;
        if (isArray(images) && images?.every((img) => asString(img))) {
            slider = setInterval(() => {
                const nextImage =
                    indexRef.current >= images.length - 1
                        ? 0
                        : indexRef.current + 1;
                setImageIndex(nextImage);
                indexRef.current = nextImage;
            }, time);
        }

        return () => clearInterval(slider);
    }, [time, themeTitle]);

    if (loading)
        return (
            <FigureImage
                otherImage={DEFAULT_BOARD_IMAGE}
                src={DEFAULT_BOARD_IMAGE.image}
                alt={DEFAULT_BOARD_IMAGE.alt}
                title={DEFAULT_BOARD_IMAGE.alt}
                width={DEFAULT_BOARD_IMAGE.width}
                height={DEFAULT_BOARD_IMAGE.height}
            />
        );

    return (
        <FigureImage
            otherImage={DEFAULT_BOARD_IMAGE}
            src={getImage(images?.[imageIndex], ["defaultCourses"])}
            alt={asString(themeTitle)}
            title={asString(themeTitle)}
            width={getImageSize(images?.[imageIndex], "width")}
            height={getImageSize(images?.[imageIndex], "height")}
        />
    );
}

export default AutoSliderImages;
