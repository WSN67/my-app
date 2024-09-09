import React from 'react';
import "./Game.css"

function Game() {

    const launchGame = () => {
        let game = document.getElementsByTagName('select')[0].value;


        // TODO change to rendering a whole React element <TicTacToe />
        switch (game) {
            case "Morpion":
                let div = document.createElement('div');
                div.className = "TicTacToe";
                document.getElementsByClassName("Game-home-container")[0].appendChild(div);
                break;

            default:
                console.log("Game not found");
                return;
        }



        document.getElementsByTagName('select')[0].remove();
        document.getElementsByTagName('button')[0].remove();

    }

    return <div className="Game-home-container">
        <select name="Selectionner" id="select" required={true} >
            <option value="Default">Sélectionnez un jeu</option>
            <option value="Morpion">Tic Tac Toe</option>
        </select>
        <button className="playGame" onClick={launchGame}>Jouer</button>
    </div>;
}

export default Game