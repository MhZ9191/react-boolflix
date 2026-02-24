import { useSearch } from "../contexts/SearchContext";
import CardFilm from "../components/CardFilm";
export default function MainMovie() {
  const { dataValues } = useSearch();
  return (
    <main>
      <section>
        <div>
          <h2>FILM</h2>
          {dataValues.map(
            ({
              id,
              title,
              original_title,
              original_language,
              vote_average,
              poster_path,
            }) => {
              return (
                <CardFilm
                  key={id}
                  title={title}
                  vote_average={vote_average}
                  original_title={original_title}
                  original_language={original_language}
                  poster={poster_path}
                />
              );
            },
          )}
        </div>
      </section>
    </main>
  );
}
