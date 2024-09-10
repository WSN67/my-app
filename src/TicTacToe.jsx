import React, { useState } from 'react';
import './TicTacToe.css'
import Square from './Square';

function TicTacToe() {

    const [symbol, setSymbol] = useState({ game: "TicTacToe", value: "X" });

    // const checkwin = () => {
    //     let s1 = document.getElementById("1");
    //     console.log(s1);

    // }





    return <div className="TicTacToe" >
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="1" />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="2" />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="3" />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="4" />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="5" />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="6" />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="7" />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="8" />
        <Square game={symbol.game} symbol={symbol.value} setSymbol={setSymbol} id="9" />
    </div>;
}

export default TicTacToe