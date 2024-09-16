import React, { useRef, useState } from 'react';
import './TicTacToe.css'
import Square from './Square';

function TicTacToe() {

    const [symbol, setSymbol] = useState({ game: "TicTacToe", value: "X" });

    // const resetGrid = () => {
    //     box = new Array(9).fill(null);
    // };

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
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} hasWin={hasWin} setHasWin={setHasWin} />
    </div>;
}

export default TicTacToe