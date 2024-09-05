import React from 'react';
import './Application.css';

function Application() {

    const secondUrl = "https://miro.medium.com/v2/resize:fit:640/format:webp/1*WslFDeNOddiDA3UYXyndrA.jpeg";

    const handleClick = () => {
        // delete the container children
        const container = document.querySelector('.Application-container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    };

    return <>
        <div className="Application-container">
            <img className="Application-img" src="https://cdn.pixabay.com/photo/2024/05/24/19/06/bird-8785666_960_720.jpg"></img>
            <footer className="Application-footer" onClick={handleClick} >Appuyez pour commander</footer>
        </div>
    </>;
}
export default Application