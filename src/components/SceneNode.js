import React, { useState } from "react";

export default function SceneNode({ node, depth = 0, onSelect }) {
    const [open, setOpen] = useState(depth < 1);

    const hasChildren =
        (node.children && node.children.length) ||
        (node.components && node.components.length) ||
        (node.functions && node.functions.length);

    return (
        <div>
            <div
                className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 cursor-pointer ${
                    open ? "bg-gray-50" : ""
                }`}
                onClick={() => {
                    setOpen(!open);
                    onSelect(node);
                }}
            >
                <div className="flex-1">
                    <div className="text-sm font-medium">{node.name}</div>
                    {node.type && <div className="text-[11px] text-gray-500">{node.type}</div>}
                </div>
            </div>

            {open && (
                <div className="ml-4 border-l border-gray-100 pl-3">
                    {node.description && (
                        <div className="text-xs text-gray-600 mb-2">{node.description}</div>
                    )}

                    {node.components &&
                        node.components.map((c, i) => (
                            <SceneNode key={"comp-" + i} node={c} depth={depth + 1} onSelect={onSelect} />
                        ))}
                    {node.children &&
                        node.children.map((c, i) => (
                            <SceneNode key={"child-" + i} node={c} depth={depth + 1} onSelect={onSelect} />
                        ))}

                    {node.functions && (
                        <ul className="mt-2 mb-2">
                            {node.functions.map((f, idx) => (
                                <li key={idx} className="text-xs text-gray-700 mb-1">
                                    • {f}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
