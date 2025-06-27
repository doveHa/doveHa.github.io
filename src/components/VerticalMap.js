import React from "react";

export default function VerticalMap({ children }) {
    return (
        <div style={{ scrollBehavior: 'smooth' }}>
            {children}
        </div>
    );
}
