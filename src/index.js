import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Header from "./components/header";
import StartScreen from "./components/startScreen";
import Sessions from "./components/sessions";

function App() {
    const [footerState, setFooterState] = useState([]);

    return (
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<StartScreen />} />
                    <Route path="/sessoes/:idMovie" element={<Sessions 
                    setFooterState={(title,posterURL,weekday,hour) => setFooterState(
                        [...footerState,title,posterURL,weekday,hour])}/>} />
                </Routes>
            </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));