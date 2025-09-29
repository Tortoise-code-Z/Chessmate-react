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
 * AutoSliderImages - React component that automatically cycles through a set of images for a course theme.
 *
 * Features:
 * - Displays images one at a time in a slider with automatic interval transitions based on the `time` prop.
 * - Shows a default board image (`DEFAULT_BOARD_IMAGE`) when loading or if images are unavailable.
 * - Resets the slider to the first image whenever the theme title or images change.
 * - Uses `useRef` to keep track of the current image index between re-renders.
 * - Calculates image source, width, and height using utility functions `getImage` and `getImageSize`.
 *
 * Props:
 * - `images`: Array of image URLs to display in the slider.
 * - `themeTitle`: Title of the current theme, used for alt and title attributes.
 * - `time`: Interval time in milliseconds for automatic sliding.
 * - `setLoading`: Function to update the loading state.
 * - `loading`: Boolean indicating if the slider is in a loading state.
 *
 * @returns JSX.Element: A figure image element that cycles through theme images with automatic sliding.
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
