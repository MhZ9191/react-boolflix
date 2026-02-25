import { flags } from "../assets/data/dataFlag";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCard } from "../contexts/CardContext";
export default function CardFilm({
  title,
  vote_average,
  original_title,
  original_language,
  poster,
  overview,
}) {
  const { averageStar } = useCard();

  const urlForImage = "https://image.tmdb.org/t/p/w342/";
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

  const currentStar = averageStar(vote_average);
  return (
    <>
      <div className="card-item">
        <div className="card-poster">
          <figure>
            {poster ? (
              <img src={urlForImage + poster} alt={title} />
            ) : (
              <img className="not-found" src="notFound.png" alt={title} />
            )}
          </figure>
        </div>

        <div className="card-div">
          <div>{title}</div>
          <div>{currentStar}</div>
          <div className="image-div-flag">
            <img src={imageFlag} alt={title} title={original_language} />
          </div>
          <div className="scroll">{overview}</div>
        </div>
      </div>
    </>
  );
}
