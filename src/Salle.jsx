import Exercise from './Exercise';

function Salle() {

    const exo = {
        exerciseTitle: "titre",
        poids: "poids",
        ajuster: "slider",
    };

    return (
        <div className="Salle-home-container">
            <Exercise exo={exo} />
        </div>
    );
}

export default Salle;