import React, { useRef, useEffect, useState } from "react";
import "./SceneImage.css";

export default function SceneImage({ selectedNode, rootData }) {
    const imgRef = useRef(null);
    const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function updateSize() {
            if (imgRef.current) {
                setImgSize({
                    width: imgRef.current.clientWidth,
                    height: imgRef.current.clientHeight,
                });
            }
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    // 부모 노드 찾기
    function findParentNode(root, targetName) {
        if (!root.children) return null;
        for (let child of root.children) {
            if (child.name === targetName) return root;
            const result = findParentNode(child, targetName);
            if (result) return result;
        }
        return null;
    }

    const topNode = selectedNode ? findParentNode(rootData, selectedNode.name) || rootData : rootData;
    const topImage = `/images/HomeScene/${topNode.name}.png`;
    const bottomImage = selectedNode ? `/images/HomeScene/${selectedNode.name}.png` : null;

    const highlight = selectedNode?.imageHighlight;

    return (
        <div className="scene-container">
            {/* 상단 4 */}
            <div className="scene-top">
                <img src={topImage} alt={topNode.name} className="scene-img" ref={imgRef} />
                {highlight && imgSize.width && imgSize.height && (
                    <svg className="highlight-layer" width={imgSize.width} height={imgSize.height}>
                        <rect
                            x={highlight.x * imgSize.width}
                            y={highlight.y * imgSize.height}
                            width={highlight.width * imgSize.width}
                            height={highlight.height * imgSize.height}
                            stroke="red"
                            fill="transparent"
                            strokeWidth="2"
                        />
                    </svg>
                )}
            </div>

            {/* 중앙 2 */}
            <div className="scene-middle">
                <img src="/images/arrow-down.png" alt="Arrow" className="scene-arrow" />
            </div>

            {/* 하단 4 */}
            <div className="scene-bottom">
                {bottomImage ? (
                    <img src={bottomImage} alt={selectedNode.name} className="scene-img" />
                ) : (
                    <p>오브젝트 선택 시 동작 이미지 표시</p>
                )}
            </div>
        </div>
    );
}
