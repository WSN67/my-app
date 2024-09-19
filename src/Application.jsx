import React, { useState } from 'react';
import './Application.css';
import Projects from './Projects';
import Contacts from './Contacts';
import Game from './Game';

function Application() {

    const secondUrl = "https://miro.medium.com/v2/resize:fit:640/format:webp/1*WslFDeNOddiDA3UYXyndrA.jpeg";

    const [home, setHome] = useState(true);
    const [projects, setProjects] = useState(false);
    const [games, setGames] = useState(false);
    const [contacts, setContacts] = useState(false);

    const handleClick = () => {
        // delete the container children
        const container = document.querySelector('.Application-container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        // create a nav menu and append it to container
        const nav = document.createElement('nav');
        nav.className = "Application-nav";
        const navItems = [
            { title: 'Home' },
            { title: 'Projects' },
            { title: 'Games' },
            { title: 'Contacts' },
        ];
        navItems.forEach(item => {
            const navItem = document.createElement('button');
            navItem.addEventListener('click', navigateToPage);
            navItem.textContent = item.title;
            nav.appendChild(navItem);
        });
        container.appendChild(nav);
    };


    function navigateToPage() {
        switch (this.innerHTML) {
            case "Home": return;
            case "Projects":
                setProjects(!projects);
                break;
            case "Games":
                setGames(!games);
                break;
            case "Contacts":
                setContacts(!contacts);
                break;
            default:
                console.log("not found");
                return;
        }
        setHome(false);
    }



    return <>
        {home &&
            <div className="Application-container">
                <img className="Application-img" src="https://cdn.pixabay.com/photo/2024/05/24/19/06/bird-8785666_960_720.jpg" alt='home '></img>
                <footer className="Application-footer" onClick={handleClick} >Appuyez pour commencer</footer>
            </div>
        }
        {projects && <Projects />}
        {games && <Game />}
        {contacts && <Contacts />}
    </>;
}
export default Application