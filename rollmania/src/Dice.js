import './Die.css';
import { useState } from 'react';

function Die() {

  let [number, setNumber] = useState(1)

  let min = 1;
  let max = 7 - min; 

  function roll()
  {
  	let random_num = Math.floor(Math.random() * max + min);
	setNumber(parseInt(random_num));
  }
  return (
  	<button className="Die" onClick={roll}>
		<p className="DieNumber">{number}</p>
	</button>
  );
}

export default Die;
