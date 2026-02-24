export default function Score({ score }) {
  return (
    <div className="scoreRow">
      <span className="scoreDate">{score.date}</span>
      <span className="scoreValue">{score.score}</span>
    </div>
  );
}