import React, { useState } from 'react';
import "./Game.css";
import TicTacToe from './TicTacToe';

function Game() {
    const [gameSelected, setGameSelected] = useState(false);
    const [tictactoe, setTictactoe] = useState(false);

    const launchGame = () => {
        let game = document.getElementById('select').value;

        switch (game) {
            case "TicTacToe":
                setTictactoe(true);  // Show TicTacToe
                setGameSelected(true);  // Hide select and button
                break;

            default:
                document.getElementById('error-message-button').style.display = "flex";
                console.log("Game not found");
                return;
        }
    };

    return (
        <div className="Game-home-container">
            {tictactoe && <TicTacToe />}
            {!gameSelected && (  // Only show the select and button if no game is selected
                <>
                    <select id="select" required={true}>
                        <option value="Default">Sélectionnez un jeu</option>
                        <option value="TicTacToe">Tic Tac Toe</option>
                    </select>
                    <div id="error-message-button">Selectionnez un jeu dans la liste</div>
                    <button className="playGame" onClick={launchGame}>Jouer</button>
                </>
            )}
        </div>
    );
}

export default Game;
