import React, { useState } from 'react';
import "./Square.css"

function Square(prop) {


    const [checked, setChecked] = useState("");

    const handleClick = () => {
        if (checked !== "" || prop.hasWin) return;

        if (prop.game === "TicTacToe") {
            console.log("setSymbol");
            let grid = document.getElementsByClassName("square");

            checkWin(grid);
            if (prop.hasWin) {
                return;
            }

            setChecked(prop.symbol);



            prop.setSymbol({ game: "TicTacToe", value: prop.symbol === "X" ? "O" : "X" });
        }
    };


    const toggleWin = () => {
        prop.setHasWin(!prop.hasWin);
    }

    const checkWin = (grid) => {
        console.log("checkWin");

        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < win.length; i++) {
            let [a, b, c] = win[i];
            if (
                grid[a].innerHTML !== "" &&
                grid[a].innerHTML === grid[b].innerHTML &&
                grid[a].innerHTML === grid[c].innerHTML
            ) {
                toggleWin();
                alert(grid[a].innerHTML + " a gagne !");
                return;
            }
        }

    }

    return (
        <div className="square" onClick={handleClick} >
            {checked}
        </div>
    );
}

export default Square