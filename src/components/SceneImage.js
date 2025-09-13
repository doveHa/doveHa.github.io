import React from "react";

export default function SceneImage({ hoveredNode }) {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            position: "relative"
        }}>
            <span>{hoveredNode ? `Hovered: ${hoveredNode.name}` : "Scene Image"}</span>
        </div>
    );
}
