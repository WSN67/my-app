import { useState } from "react";
import './Exercise.css';

function Exercise(prop) {
    const [poids, setPoids] = useState("2.5");


    function changePoids(e) {
        setPoids(e.target.value);
    }

    function add() {
        if (poids === "100") return;
        setPoids((parseFloat(poids) + 0.5).toString());
    }
    function sub() {
        if (poids === "2.5") return;
        setPoids((parseFloat(poids) - 0.5).toString());
    }

    return (
        <div className="Exercise-home-container">
            <p>{prop.exo.exerciseTitle}</p>
            <p>{poids}</p>
            <input type="range" min="2.5" max="100" step="0.5" value={poids} onChange={changePoids} />
            <button type="button" onClick={add}>+</button>
            <button type="button" onClick={sub}>-</button>
        </div >
    );
}

export default Exercise;