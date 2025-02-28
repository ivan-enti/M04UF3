import './PlayerName.css';
import { useState } from 'react';

function PlayerName(props) {
  let [player_name, setPlayerName] = useState("");
  let [show_name, setShowName] = useState(false);

  let min_char = 3;
  let max_char = 12;

  function update_name(event){
	setPlayerName(event.target.value)
  }

  function write_name () {
    let tmp = player_name.trim();

	if(tmp.length < min_char){
	  console.log("Demasiado corto");
	  return;
	}
	if(tmp.length > max_char){
	  console.log("Demasiado largo");
	  return;
	}

	setShowName(true);
	props.setPlayerName(player_name);
  }


  if(!show_name){
    return (
      <p>
        <input type="text" name="player_name" placeholder="Nombre del jugador/a" 
	    value={player_name} onChange={update_name}/> 
	    <button onClick={write_name}>Guardar</button>
      </p>
    );
  }
  else{
	return(
	  <p><strong>{player_name}</strong></p>
	);
  }
}

export default PlayerName;
