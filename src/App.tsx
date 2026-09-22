import Card from "./Components/Card";

export default function App(){
  return(
    <>
    <header className="header">
      <h1>Harry Potter</h1>
      <p>View all characters from the Harry Potter universe</p>
      <div className="header__input--1">
      <label htmlFor="name">Name</label>
      <input className="header__input--name" id="name" type="text" value='type here...'/>
      </div>
      <div className="header__input--2">
      <label htmlFor="School">School</label>
      <input className='header__input--school' id="School" type="text" value='type here...' />
      </div>
    </header>
    <Card />
    </>
  )
}