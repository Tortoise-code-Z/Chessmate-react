import { Course } from "../../../../types/types";
import { getImage } from "../../../../utils/images";
import styles from "./Authors.module.css";

type Props = {
    data: Course;
};

function Authors({ data }: Props) {
    console.log(data);
    return (
        <div className={[styles].join(" ")}>
            <h3>Autores</h3>
            <div>
                {data.authors.map((a) => (
                    <div key={a.name}>
                        <figure>
                            <img
                                src={getImage(a.image, ["authors"])}
                                alt={a.name}
                                title={a.name}
                                width={""}
                                height={""}
                            />
                        </figure>
                        <div>
                            <div>
                                <p>{a.name}</p>
                                <span>{a.level}</span>
                                <p>{a.elo} ELO</p>
                            </div>
                            <p>{a.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Authors;
