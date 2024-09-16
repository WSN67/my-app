import React, { useRef, useState } from 'react';
import './TicTacToe.css'
import Square from './Square';

function TicTacToe() {

    const [symbol, setSymbol] = useState({ game: "TicTacToe", value: "X" });

    function appendResetButton() {
        alert("yes");
        console.log(document.getElementsByClassName("TicTacToe")[0]);
    }


    const [hasWin, setHasWin] = useState(false);



    return <div className="TicTacToe" >
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} onload={appendResetButton} />
    </div>;
}

export default TicTacToe