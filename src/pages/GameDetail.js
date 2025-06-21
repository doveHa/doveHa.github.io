import { useParams } from "react-router-dom";
import games from "../data/games";

export default function GameDetail() {
    const { id } = useParams();
    const game = games.find((g) => g.id === parseInt(id));

    if (!game) return <p>게임을 찾을 수 없습니다.</p>;

    return (
        <div className="container">
            <h1>{game.title}</h1>
            <img src={game.thumbnail} alt={game.title} />
            <p>{game.description}</p>
        </div>
    );
}
