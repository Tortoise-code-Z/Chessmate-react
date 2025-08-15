import FigureImage from "../../../../../components/FigureImage";
import { AuthorCurseData } from "../../../../../types/types";
import { getImage, getImageSize } from "../../../../../utils/images";
import styles from "./AuthorsItem.module.css";

type Props = {
    author: AuthorCurseData;
};

function AuthorsItem({ author }: Props) {
    return (
        <div className={styles.authorsItem} key={author.id}>
            <FigureImage
                src={getImage(author.image, ["authors"])}
                alt={author.name}
                title={author.name}
                width={getImageSize(author.image, "width")}
                height={getImageSize(author.image, "height")}
            />

            {/* Author data */}
            <div className={styles.authorItemData}>
                <div className={styles.data}>
                    <p className={styles.name}>{author.name}</p>
                    <span className={styles.level}>{author.level}</span>
                    <p className={styles.elo}>{author.elo} ELO</p>
                </div>
                <p className={styles.description}>{author.description}</p>
            </div>
        </div>
    );
}

export default AuthorsItem;
