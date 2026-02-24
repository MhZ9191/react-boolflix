export default function CardFilm({
  title,
  vote_average,
  original_title,
  original_language,
}) {
  return (
    <div className="card-div">
      <div>{title}</div>
      <div>{vote_average}</div>
      <div>{original_language}</div>
      <div>{original_title}</div>
    </div>
  );
}
