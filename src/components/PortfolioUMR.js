import { useState } from "react";
import Node from "./Node";
import SceneImage from "./SceneImage";
import DetailPanel from "./DetailPanel";
import { homeScene } from "../data/homeScene";
import "./PortfolioUMR.css";

export default function PortfolioUMR() {
    const [hoveredNode, setHoveredNode] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <div className="portfolio-container">
            <div className="panel left-panel">
                <SceneImage
                    hoveredNode={hoveredNode}
                    selectedNode={selectedNode}
                    rootData={homeScene}
                />
            </div>

            <div className="panel middle-panel">
                <Node
                    node={homeScene}
                    onHover={setHoveredNode}
                    onSelect={setSelectedNode}
                    selectedNode={selectedNode}
                    rootData={homeScene}
                />
            </div>

            <div className="panel right-panel">
                <DetailPanel node={selectedNode} rootData={homeScene} />
            </div>
        </div>
    );
}
