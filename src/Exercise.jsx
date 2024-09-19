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
            <p className="Exercise-p" id="title">{prop.exo.exerciseTitle}</p>
            <p className="Exercise-p">{poids} kg</p>
            <input className="Exercise-slider" type="range" min="2.5" max="100" step="0.5" value={poids} onChange={changePoids} />
            <span className="Exercise-buttons-container">
                <button className="Exercise-button" type="button" onClick={sub}>-</button>
                <button className="Exercise-button" type="button" onClick={add}>+</button>
            </span>
        </div >
    );
}

export default Exercise;