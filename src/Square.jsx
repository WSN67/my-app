import React, { useState } from 'react';
import "./Square.css"

function Square(prop) {

    const [checked, setChecked] = useState("");

    const handleClick = () => {
        if (checked !== "") return;

        if (prop.game === "TicTacToe") {
            setChecked(prop.symbol);
            prop.setSymbol({ game: "TicTacToe", value: prop.symbol === "X" ? "O" : "X" });
        }
    };

    return (
        <div className="square" onClick={handleClick} >
            {checked}
        </div>
    );
}

export default Square;