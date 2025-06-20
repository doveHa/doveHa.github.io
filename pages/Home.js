import React from "react";
import games from "../data/games";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="container">
            <h1>🎮 My Game Portfolio</h1>
            <div className="card-grid">
                {games.map((game) => (
                    <div key={game.id} className="card">
                        <img src={game.thumbnail} alt={game.title} />
                        <h3>{game.title}</h3>
                        <p>{game.shortDescription}</p>
                        <Link to={`/games/${game.id}`}>
                            <button>자세히 보기</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
