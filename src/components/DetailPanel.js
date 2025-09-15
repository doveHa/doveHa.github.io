import React from "react";
import "./DetailPanel.css";

function findNodeByName(node, name) {
    if (node.name === name) return node;
    if (node.children) {
        for (let child of node.children) {
            const result = findNodeByName(child, name);
            if (result) return result;
        }
    }
    return null;
}

export default function DetailPanel({ node, rootData }) {
    if (!node) return <div className="detail-panel">선택된 항목이 없습니다.</div>;

    const relatedNodes = node.related ? (Array.isArray(node.related) ? node.related : [node.related]) : [];

    return (
        <div className="detail-panel">
            <div className="detail-card">
                <h2>{node.name}</h2>
                {node.type && <p><strong>{node.type}</strong></p>}
                {node.description && <p>{node.description}</p>}
                {node.function && <p><strong>Function:</strong> {node.function}</p>}
            </div>

            {relatedNodes.length > 0 && (
                <div className="related-container">
                    {relatedNodes.map((rName, idx) => {
                        const relatedNode = findNodeByName(rootData, rName);
                        if (!relatedNode) return null;
                        return <DetailPanel key={idx} node={relatedNode} rootData={rootData} />;
                    })}
                </div>
            )}
        </div>
    );
}
