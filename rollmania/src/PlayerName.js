import './PlayerName.css';
import { useState } from 'react';

function PlayerName() {
  let [player_name, setPlayerName] = useState("");

  function check_name(){
	
  }
  return (
    <p><input type="text" name="player_name" 
	placeholder="Nombre del jugador/a" 
	value={player_name} 
	onChange={(e) => setPlayerName(e.target.value)}/> 
	<button>{player_name}</button></p>
  );
}

export default PlayerName;
