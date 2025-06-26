import React from "react";
import games from "../data/games";
import { Link } from "react-router-dom";
import "./Home.css";
import ClockInteractive from "../components/ClockInteractive"

export default function Home() {
    return (
        <div className="container">
            <ClockInteractive/>
            <h1>🎮 My Game Portfolio</h1>
            <div className="card-grid-7x3">
                {games.map((game) => (
                    <Link to={`/games/${game.id}`} key={game.id} className="card">
                        <img src={game.thumbnail} alt={game.title} />
                        <h3>{game.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
