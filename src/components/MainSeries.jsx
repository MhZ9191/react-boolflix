import { useSearch } from "../contexts/SearchContext";
import CardFilm from "../components/CardFilm";
export default function MainSeries() {
  const { dataTVs } = useSearch();
  return (
    <main>
      <section>
        <div>
          <h2>SERIE TV</h2>
          {dataTVs.map(
            ({
              id,
              original_name,
              name,
              original_language,
              vote_average,
              poster_path,
            }) => {
              return (
                <CardFilm
                  key={id}
                  poster={poster_path}
                  title={name}
                  vote_average={vote_average}
                  original_title={original_name}
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
