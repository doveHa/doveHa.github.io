import React from "react";
import './Scene.css';

export default function Scene({ id, children }) {
    return (
        <section id={id} className="scene">
            <div className="scene-box">
                {children}
            </div>
        </section>
    );
}
