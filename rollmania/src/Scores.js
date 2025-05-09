import './Scores.css';
import ScoreItem from './ScoreItem.js';
import { useState, useRef } from 'react';

function Scores(props) {
  let [score_list, setList] = useState([]);
  let initial_set = useRef(false);
  let new_player = useRef(false);

  function get_score(){
    let tmp_list = [];
    let score_local_name = "puntuacion";

  	let score_json = localStorage.getItem(score_local_name);
  	score_json = JSON.parse(score_json);

  	for(let i = 0; i < score_json.length; i++){
      let name = score_json[i].nombre;
    	let score = score_json[i].score;
    	tmp_list.push(<ScoreItem key={i} p_name={name} p_score={score}/>)
  	}

	setList(tmp_list);
	initial_set.current = true;
  }

  if(!(initial_set.current))
    get_score();

  if(props.current_score != "" && !(new_player.current)){
	console.log(props.current_score);
	new_player.current = true;
  }

  return (
    <section className="Scores">
	  <h2>Scores</h2>
	  <ol>
	    {score_list}
	  </ol>
	</section>
  );
}

export default Scores;
