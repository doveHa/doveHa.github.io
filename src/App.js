import React, {useEffect, useState} from "react";
import PortfolioUMR from "./components/PortfolioUMR";

function App() {
    useEffect(() => {
        document.title = "Portfolio UMR";
    }, []);

    return <PortfolioUMR/>;
}

export default App;


/*
import React from "react";
import ImageAnnotator from "./Temp/ImageAnnotator";

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Image Highlight Annotator</h1>
            <ImageAnnotator imgSrc="/images/ImageAnnotator.png" />
        </div>
    );
}

export default App;
*/