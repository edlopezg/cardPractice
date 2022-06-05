import './App.css';
import { useState } from 'react';
import CardOne from './components/CardOne';
import SecondCard from './components/SecondCard';
import quotes from './json/quotes.json'

function App() {

  //Aqui estamos cambiando el estado (Json) de manera random con las funciones 
  const randomQuote = () => Math.floor(Math.random() * quotes.length)
  // Utilizamos el hook useState para hacer la accion
  const [positionQuotes, setpositionQuotes] = useState(randomQuote())
  const chQuotes = () => {
    setpositionQuotes(randomQuote())
    chColor()
  }

  // Aqui vamos a realizar un Hook useState para hacer el cambio de color al precionar el boton 

  const colors = ['#58D68D', '#F4D03F', '#5D6D7E', '#633974', '#5DADE2', '#D1F2EB', '#FBEEE6', '#E6B0AA', '#417B5A', '#C879FF', '#B8336A', '#37515F', '#251605', '#49111C', '#D84727', '#EF7B45', '#208AAE']
  const randomColor = () => Math.floor(Math.random() * colors.length)
  const [positionColor, setpositionColor] = useState(randomColor())
  const chColor = () => setpositionColor(randomColor())

  document.body.style = `background-color: ${colors[positionColor]}`

  return (
    <div className="App">
      <CardOne positionQuotes={positionQuotes} color={colors[positionColor]}/>
      <SecondCard positionQuotes={positionQuotes} chQuotes={chQuotes} color={colors[positionColor]} chColor={chColor}/>
    </div>
  );
}

export default App;
