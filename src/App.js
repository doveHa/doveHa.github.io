import React, {useEffect} from "react";
import PortfolioUMR from "./components/PortfolioUMR";

function App() {
    useEffect(() => {
        document.title = "AM 04:07";
    }, []);

    return (
        <div className="App">
            <PortfolioUMR />
        </div>
    );
}

export default App;
