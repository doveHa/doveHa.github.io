import React from "react";
import { useParams, Link } from "react-router-dom";
import games from "../data/games";

export default function GameDetail() {
    const { id } = useParams();
    const game = games.find((g) => g.id === id);

    if (!game) return <p>게임을 찾을 수 없습니다.</p>;

    return (
        <div style={{ padding: 20 }}>
            <h2>{game.title}</h2>
            <img src={game.thumbnail} alt={game.title} style={{ maxWidth: 600 }} />
            <p>{game.description}</p>
            <a href={game.link} target="_blank" rel="noreferrer">
                <button>게임 플레이</button>
            </a>
            <br />
            <Link to="/">← 돌아가기</Link>
        </div>
    );
}
