import React from "react";

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

export default function DetailPanel({ node, rootData, level = 0 }) {
    if (!node) return <div>선택된 항목이 없습니다.</div>;

    // related를 배열로 안전하게 변환
    const relatedNodes = node.related
        ? Array.isArray(node.related) ? node.related : [node.related]
        : [];

    return (
        <div style={{ marginBottom: "16px", position: "relative" }}>
            <div style={{
                padding: "12px",
                border: "2px solid #888",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
            }}>
                <h2 style={{ fontWeight: "bold", marginBottom: "6px" }}>{node.name}</h2>
                {node.type && <p><strong>Type:</strong> {node.type}</p>}
                {node.description && <p>{node.description}</p>}
                {node.function && <p><strong>Function:</strong> {node.function}</p>}
            </div>

            {/* 관련 오브젝트 재귀 */}
            {relatedNodes.length > 0 && (
                <div style={{ marginTop: "12px", paddingLeft: "16px", borderLeft: "2px dashed #888" }}>
                    {relatedNodes.map((rName, idx) => {
                        const relatedNode = findNodeByName(rootData, rName);
                        if (!relatedNode) return null;
                        return <DetailPanel key={idx} node={relatedNode} rootData={rootData} level={level + 1} />;
                    })}
                </div>
            )}
        </div>
    );
}
