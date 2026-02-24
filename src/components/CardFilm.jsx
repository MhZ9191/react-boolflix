import { flags } from "../assets/data/dataFlag";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function CardFilm({
  title,
  vote_average,
  original_title,
  original_language,
  poster,
}) {
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

  const averageStar = () => {
    const average = Math.floor(vote_average / 2);
    return (
      <div className="star-average">
        {[...Array(5)].map((elem, ind) => (
          <span key={ind}>
            {ind < average ? (
              <i class="bi bi-star-fill"></i>
            ) : (
              <i className="bi bi-star"></i>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    // <div>
    //   <figure>
    //     {poster ? (
    //       <img src={urlForImage + poster} alt={title} />
    //     ) : (
    //       <img className="not-found" src="notFound.png" alt={title} />
    //     )}
    //   </figure>
    // </div>
    //
    <div className="card-div">
      <div>{title}</div>
      <div>{averageStar()}</div>
      <div className="image-div-flag">
        <img src={imageFlag} alt={title} title={original_language} />
      </div>
      <div>{original_title}</div>
    </div>
  );
}
