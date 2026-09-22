
export default function Card(){
    return(
        <>
        <div className="card">
            <h1 className="card__HermioneGranger">Hermione Granger</h1>
            <ul className="card__HermioneGranger--characteristic">
                <li>Actor: Emma Watson</li>
                <li>Gender: female</li>
                <li>House: Gryffindor</li>
                <li>Wand core: dragon heartstring</li>
                <li>Alive: yes </li>
            </ul>
            <ul className="card__DracoMalfoy--characteristic">
                <h1>Draco Malfoy</h1>
                <li>Actor: Tom Felton</li>
                <li>Gender: male</li>
                <li>House: Slytherin</li>
                <li>Wand core: unicorn tail-hair</li>
                <li>Alive: yes </li>
            </ul>
        </div>
        </>
    )
}