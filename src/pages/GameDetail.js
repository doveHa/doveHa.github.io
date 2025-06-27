import "./GameDetail.css"
import {useParams} from "react-router-dom";
import games from "../data/games";
import Scene from "../components/Scene";
import HomeScene from "./scenePages/HomeScene";
import UserMainScene from "./scenePages/UserMainScene";
import LoadingScene from "./scenePages/LoadingScene";
import GameScene from "./scenePages/GameScene";
import VerticalMap from "../components/VerticalMap";

export default function GameDetail() {
    const {id} = useParams();
    const game = games.find((g) => g.id === parseInt(id));

    if (!game) return <p>게임을 찾을 수 없습니다.</p>;

    return (
        <div className="container">
            <h1 id="title">{game.title}</h1>
            <img src={game.thumbnail} alt={game.title}/>
            <p>{game.description}</p>

            <VerticalMap>
                <Scene id="home"><HomeScene/></Scene>
                <Scene id="userMain"><UserMainScene/></Scene>
                <Scene id="loading"><LoadingScene/></Scene>
                <Scene id="game"><GameScene/></Scene>
            </VerticalMap>

        </div>
    );
}
