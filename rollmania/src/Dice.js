import './Dice.css';
import Die from './Die.js';
import { useRef } from 'react';

function Dice(props) {

  const score = useRef(0);
  const die_num = useRef(props.amount);
  let count = 0;

  function get_dice (amount, roll, add_result){
    let dice_list = [];

    for (let i = 0; i < amount; i++){
      dice_list.push(<Die key={i} roll={roll} onResult={add_result} />);
    }

    return dice_list;
  }

  function sumScore(points){
	score.current += points;
	count += 1;
	if(die_num.current === count)
	  props.setPlayerScore(score.current);
  }


  return (
  	<div className="Dice">
	  {get_dice(die_num.current, props.roll, sumScore)}
	</div>
  );
}

export default Dice;
