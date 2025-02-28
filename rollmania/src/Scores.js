import './Scores.css';
import ScoreItem from './ScoreItem.js';

function Scores(props) {
  function get_scores(amount){
    let score_list = [];

    for(let i = 0; i < amount; i++){
      score_list.push(<ScoreItem key={i} p_name="Jacinto" p_score="33"/>)
	}

	return score_list;
  }
  return (
    <section className="Scores">
	  <h2>Scores</h2>
	  <ol>
	    {get_scores(5)}
	  </ol>
	</section>
  );
}

export default Scores;
