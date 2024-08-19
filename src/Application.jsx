import React from 'react';
import PropsType from 'prop-types';
import './Application.css';

function Application() {

    const secondUrl = "https://miro.medium.com/v2/resize:fit:640/format:webp/1*WslFDeNOddiDA3UYXyndrA.jpeg";

    return <>
        <div className="Application-container">
            <img className="Application-img" src="https://cdn.pixabay.com/photo/2024/05/24/19/06/bird-8785666_960_720.jpg"></img>
            <footer className="Application-footer">Appuyez pour commander</footer>
        </div>
    </>;
}
export default Application