import Exercise from './Exercise';
import './Salle.css';

function Salle() {

    const exo = {
        exerciseTitle: "titre",
        poids: "poids",
        ajuster: "slider",
    };

    return (
        <div className="Salle-home-container">
            <Exercise exo={exo} />
            <Exercise exo={exo} />
            <Exercise exo={exo} />
            <Exercise exo={exo} />
            <Exercise exo={exo} />
            <Exercise exo={exo} />
        </div>
    );
}

export default Salle;