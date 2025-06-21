import games from "../data/games";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <h1>🎮 My Game Portfolio</h1>
            <div className="card-grid">
                {games.map((game) => (
                    <Link to={`/games/${game.id}`} key={game.id} className="card">
                        <img src={game.thumbnail} alt={game.title} />
                        <h3>{game.title}</h3>
                        <p>{game.shortDescription}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
