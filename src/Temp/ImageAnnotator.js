import React, { useRef, useState } from "react";

export default function ImageAnnotator({ imgSrc }) {
    const imgRef = useRef(null);
    const overlayRef = useRef(null);
    const [start, setStart] = useState(null);
    const [box, setBox] = useState(null);
    const [highlights, setHighlights] = useState([]);

    function handleMouseDown(e) {
        const rect = overlayRef.current.getBoundingClientRect();
        setStart({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setBox(null);
    }

    function handleMouseMove(e) {
        if (!start) return;
        const rect = overlayRef.current.getBoundingClientRect();
        const x = Math.min(start.x, e.clientX - rect.left);
        const y = Math.min(start.y, e.clientY - rect.top);
        const width = Math.abs(start.x - (e.clientX - rect.left));
        const height = Math.abs(start.y - (e.clientY - rect.top));
        setBox({ x, y, width, height });
    }

    function handleMouseUp() {
        if (!box || !imgRef.current) return;
        const imgWidth = imgRef.current.clientWidth;
        const imgHeight = imgRef.current.clientHeight;

        // 비율 좌표로 변환
        const highlight = {
            x: +(box.x / imgWidth).toFixed(4),
            y: +(box.y / imgHeight).toFixed(4),
            width: +(box.width / imgWidth).toFixed(4),
            height: +(box.height / imgHeight).toFixed(4),
        };

        setHighlights([...highlights, highlight]);
        setStart(null);
        setBox(null);
    }

    function downloadJSON() {
        const blob = new Blob([JSON.stringify(highlights, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "highlights.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div>
            <div style={{ position: "relative", display: "inline-block" }}>
                <img src={imgSrc} alt="Annotate" ref={imgRef} style={{ display: "block" }} />
                <div
                    ref={overlayRef}
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, cursor: "crosshair" }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    {box && (
                        <div
                            style={{
                                position: "absolute",
                                left: box.x,
                                top: box.y,
                                width: box.width,
                                height: box.height,
                                border: "2px dashed red",
                                backgroundColor: "rgba(255,0,0,0.2)",
                            }}
                        />
                    )}
                </div>
            </div>

            <div style={{ marginTop: "16px" }}>
                <button onClick={downloadJSON}>Download JSON</button>
            </div>

            {highlights.length > 0 && (
                <pre style={{ marginTop: "16px", background: "#f4f4f4", padding: "8px" }}>
          {JSON.stringify(highlights, null, 2)}
        </pre>
            )}
        </div>
    );
}
