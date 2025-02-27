import './Dice.css';
import Die from './Die.js';
import { useState } from 'react';

function Dice(props) {
	
  function get_dice (amount, roll){
    let dice_list = [];

	for (let i = 0; i < amount; i++){
      dice_list.push(<Die key={i} roll={roll} />);
    }

	return dice_list;
  }

  return (
  	<div className="Dice">
	  {get_dice(props.amount, props.roll)}
	</div>
  );
}

export default Dice;
