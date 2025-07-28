import { AUTHOR_DEFAULT_IMAGE } from "../../../../consts/images";
import { Course } from "../../../../types/types";
import { getImage } from "../../../../utils/images";
import styles from "./Authors.module.css";

type Props = {
    data: Course;
};

function Authors({ data }: Props) {
    console.log(data);
    return (
        <div className={[styles.authors].join(" ")}>
            <h3>Autores</h3>
            <div>
                {data.authors.map((a) => (
                    <div
                        className={[styles.authorsItem].join(" ")}
                        key={a.name}
                    >
                        <figure>
                            <img
                                src={AUTHOR_DEFAULT_IMAGE.image}
                                alt={AUTHOR_DEFAULT_IMAGE.alt}
                                title={AUTHOR_DEFAULT_IMAGE.alt}
                                width={AUTHOR_DEFAULT_IMAGE.width}
                                height={AUTHOR_DEFAULT_IMAGE.height}
                            />
                        </figure>
                        <div className={[styles.authorItemData].join(" ")}>
                            <div>
                                <p className={[styles.name].join(" ")}>
                                    {a.name}
                                </p>
                                <span className={[styles.level].join(" ")}>
                                    {a.level}
                                </span>
                                <p className={[styles.elo].join(" ")}>
                                    {a.elo} ELO
                                </p>
                            </div>
                            <p className={[styles.description].join(" ")}>
                                {a.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Authors;
