import './RollButton.css';
import { useState } from 'react';

function RollButton(props) {
  return (
  	<button className="RollButton" onClick={props.roll_func}>
		<p className="ButtonText">ROLL!!</p>
	</button>
  );
}

export default RollButton;
