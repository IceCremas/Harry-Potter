import Card from "./Components/Card";


export default function App(){
  return(
    <>
    <header className="header">
      <h1>Harry Potter</h1>
      <p>View all characters from the Harry Potter universe</p>

      <div className="header__input">
      <div className="header__input--1">
      <label htmlFor="name">Name</label>
      <input className="header__input--name" id="name" type="text" placeholder='type here...'/>
      </div>
      <div className="header__input--2">
      <label htmlFor="school">School</label>
      <input className='header__input--school' id="school" list="schools" type="text" placeholder='type here...' />
      <datalist id="schools">
        <option value="Hexlet" />
        <option value="itmo"/>
        <option value="spbgu" />
      </datalist>
      </div>
      </div>

    </header>
    <hr className="divider"/>

    <Card />
    </>
  )
}