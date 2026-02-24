import { flags } from "../assets/data/dataFlag";
export default function CardFilm({
  title,
  vote_average,
  original_title,
  original_language,
}) {
  let imageFlag = "noFlag.png";
  switch (original_language) {
    case "en":
      imageFlag = flags[3];
      break;
    case "it":
      imageFlag = flags[1];
      break;
    case "fr":
      imageFlag = flags[2];
      break;
    case "de":
      imageFlag = flags[0];
      break;
    default:
      break;
  }

  return (
    <div className="card-div">
      <div>{title}</div>
      <div>{vote_average}</div>
      <div className="image-div-flag">
        <img src={imageFlag} alt={title} title={original_language} />
      </div>
      <div>{original_title}</div>
    </div>
  );
}
