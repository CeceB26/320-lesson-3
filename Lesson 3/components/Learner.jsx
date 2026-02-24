import Score from "./Score";

export default function Learner({ learner }) {
  return (
    <article className="card">
      <h2 className="cardTitle">{learner.name}</h2>
      <p className="bio">{learner.bio}</p>

      <h3 className="subTitle">Scores</h3>
      <div className="scores">
        {learner.scores.map((s) => (
          <Score key={s.date} score={s} />
        ))}
      </div>
    </article>
  );
}