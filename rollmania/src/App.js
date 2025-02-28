import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';
import PlayerName from './PlayerName.js';
import Scores from './Scores.js';
import { useState, useRef } from 'react';

function App() {
  
  const [roll, setRoll] = useState(false);

  const player_name = useRef("");
  const player_score = useRef(0);

  function roll_dice(){
    setRoll(true);
	console.log("roll");
  }
  function roll_done(){
	setRoll(false);
	console.log("roll_done");
  }

  function set_player_name(name){
    player_name.current = name;
	console.log(name);
  }
  function set_player_score(score){
    player_name.score = score;
	console.log(score);
  }

  return (
    <div className="rollmania">
      <Title title="Rollmania!!!"/>
	  <PlayerName setPlayerName={set_player_name}/>
  	  <main className="App">
	  	<Dice amount="5" roll={roll} setPlayerScore={set_player_score}/>
	  </main>
	  <RollButton roll_func={roll_dice}/>
	  <Scores />
    </div>
  );
}

export default App;
