import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import {flashcardsList} from './data.js';
import './App.css'
import FrontCard from './components/FrontCard';
import BackCard from './components/BackCard';

function App() {
  const[index,setIndex]= useState(0);
  const[isFlipped,setIsFlipped]=useState(false);
  
  function nextClick(){
    const rand =  Math.floor(Math.random()*flashcardsList.length);
    console.log("this is error: "+ rand);
    setIndex((rand));
    

  }
  function backClick(){
    if(index > 0 ){
    setIndex(index-1);
 
    }
  }
  

function flipCard(){
  setIsFlipped(!isFlipped);
}
  let flashcards =  flashcardsList[index];
 
  console.log('Current flashcard:', flashcards); 
  
return(
  <>
  <div className='card-container'>
  <h1>SpongeBob FlashCards</h1>
  <h3>How well do you know spongebob? Take my quiz!</h3>
  <h5>Flashcards count: 10</h5>
 <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
<div className='front' onClick={flipCard}>
  <FrontCard
  image={flashcards.image}
  question={flashcards.question}
  />
</div>
<div className='back'  onClick={flipCard}>

  <BackCard 
  answer={flashcards.answers}
  />
</div>
 </ReactCardFlip>
  </div>   
  
  <div className='Buttons'>
    <button type="button" onClick={backClick}>BACK</button>
    <button type="button" onClick={nextClick}>NEXT</button>
  </div>
  
    </>


  )
  
}

export default App;
