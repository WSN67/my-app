import React from 'react';
import "./Game.css"

function Game() {

    const launchGame = () => {
        let game = document.getElementsByTagName('select')[0].value;
        if (game === "Default") {
            return;
        }
        console.log("launch game " + game);
    }

    return <div className="Game-home-container">
        <select name="Selectionner" id="select">
            <option value="Default">Sélectionnez un jeu</option>
            <option value="Morpion">Tic Tac Toe</option>
        </select>
        <button className="playGame" onClick={launchGame}>Jouer</button>
    </div>;
}

export default Game