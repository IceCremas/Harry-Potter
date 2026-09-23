import Granger from '../img/Granger.png'
import Malfoy from '../img/Malfoy.png'

export default function Card(){
    return(
        <>
        <div className="cards">
            <div className='card'>
            <img src={Granger} className='card__img--granger' alt="#" />
            <h1>Hermione Granger</h1>
            <ul className="card__HermioneGranger--characteristic">
                <li>Actor: Emma Watson</li>
                <li>Gender: female</li>
                <li>House: Gryffindor</li>
                <li>Wand core: dragon heartstring</li>
                <li>Alive: yes </li>
            </ul>
            </div>

            <div className='card'>
            <img src={Malfoy} className='card__img--malfoy' alt="#" />
            <h1>Draco Malfoy</h1>
            <ul className="card__DracoMalfoy--characteristic">
                <li>Actor: Tom Felton</li>
                <li>Gender: male</li>
                <li>House: Slytherin</li>
                <li>Wand core: unicorn tail-hair</li>
                <li>Alive: yes </li>
            </ul>
            </div>
        </div>
        </>
    )
}