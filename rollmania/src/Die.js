import './Die.css';
import { useState, useEffect, useRef } from 'react';

function Die(props) {

  const [number, setNumber] = useState("-");
  const randomized = useRef(false);

  useEffect(() => {
	if (number != "-")
	  props.onResult(number);
  });

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

  if(props.roll && !randomized.current){
	set_random();

	randomized.current = true;
  }
  
  return (
  	<button className="Die" onClick={set_random}>
		<p className="DieNumber">{number}</p>
	</button>
  );
}

export default Die;
