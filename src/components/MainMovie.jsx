import { useSearch } from "../contexts/SearchContext";
import CardFilm from "../components/CardFilm";
export default function () {
  const { dataValues } = useSearch();
  return (
    <main>
      <section>
        <div>
          {dataValues.map(
            ({
              id,
              title,
              original_title,
              original_language,
              vote_average,
            }) => {
              return (
                <CardFilm
                  key={id}
                  title={title}
                  vote_average={vote_average}
                  original_title={original_title}
                  original_language={original_language}
                />
              );
            },
          )}
        </div>
      </section>
    </main>
  );
}
