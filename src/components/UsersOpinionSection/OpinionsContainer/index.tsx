import { Opinion } from "../../../types/types";

type Props = {
    data: Opinion;
};

function OpinionsContainer({ data }: Props) {
    return (
        <div>
            <div>
                <p>{data.user.username}</p>
                {data.user.title && <p>{data.user.title}</p>}
                {data.user.elo && <p>{data.user.elo} ELO</p>}
            </div>
            <p>"{data.text}"</p>
        </div>
    );
}

export default OpinionsContainer;
