import React from "react";
import "./Node.css";

export default function Node({ node, onHover, onSelect, selectedNode, rootData, level = 0 }) {
    const hasChildren = node.children && node.children.length > 0;

    const isSelected = selectedNode && node.name === selectedNode.name;
    const isRelated = selectedNode && selectedNode.related &&
        (Array.isArray(selectedNode.related)
            ? selectedNode.related.includes(node.name)
            : selectedNode.related === node.name);

    let className = "node";
    if (isSelected) className += " selected";
    else if (isRelated) className += " related";

    return (
        <div style={{ marginLeft: level * 16 + "px" }}>
            <div
                className={className}
                onMouseEnter={() => onHover(node)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onSelect(node)}
            >
                {node.name}
            </div>

            {hasChildren &&
                node.children.map((child, idx) => (
                    <Node
                        key={idx}
                        node={child}
                        onHover={onHover}
                        onSelect={onSelect}
                        selectedNode={selectedNode}
                        rootData={rootData}
                        level={level + 1}
                    />
                ))}
        </div>
    );
}
