import './Die.css';
import { useState } from 'react';

function Die(props) {

  let [number, setNumber] = useState(1)

  let min = 1;
  let max = 7 - min; 

  function get_random()
  {
  	return Math.floor(Math.random() * max + min);
  }
  function set_random()
  {
  	let r = get_random();
	setNumber(parseInt(r));
  }

  if(props.roll){
	number = get_random()
	console.log("a");
	props.roll_done();
  }
  
  return (
  	<button className="Die" onClick={set_random}>
		<p className="DieNumber">{number}</p>
	</button>
  );
}

export default Die;
