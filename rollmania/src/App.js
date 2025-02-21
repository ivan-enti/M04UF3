import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';
import { useState } from 'react';

function App() {
  
  let [roll, setRoll] = useState(false);

  function roll_dice(){
    setRoll(true);
	console.log("roll");
  }
  function roll_done(){
	roll = false;
	console.log("roll_done");
  }

  return (
    <div className="rollmania">
      <Title title="Rollmania!!!"/>
  	  <main className="App">
	  	<Dice amount="5" roll={roll} roll_done={roll_done}/>
	  </main>
	  <RollButton roll_func={roll_dice}/>
    </div>
  );
}

export default App;
