import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';
import PlayerName from './PlayerName.js';
import Scores from './Scores.js';
import { useState, useRef } from 'react';

function App() {
  
  const [roll, setRoll] = useState(false);
  const [player, setPlayer] = useState("");

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
  }
  function set_player_score(score){
    player_score.current = score;
	if(player_name.current != ""){
		setPlayer({
		"nombre" : player_name.current, 
		"score": player_score.current
		});
		console.log(player);
	}
  }

  return (
    <div className="rollmania">
      <Title title="Rollmania!!!"/>
	  <PlayerName setPlayerName={set_player_name}/>
  	  <main className="App">
	  	<Dice amount="5" roll={roll} setPlayerScore={set_player_score}/>
	  </main>
	  <RollButton roll_func={roll_dice}/>
	  <Scores current_score={player.current} />
    </div>
  );
}

export default App;
