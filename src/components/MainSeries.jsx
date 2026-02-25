import { useSearch } from "../contexts/SearchContext";
import CardFilm from "../components/CardFilm";
export default function MainSeries() {
  const { dataTVs } = useSearch();
  return (
    <>
      {dataTVs.length > 0 && (
        <main>
          <section>
            <div className="div-title">
              <h2>SERIE TV</h2>
              <div className="div-wrap">
                {dataTVs.map(
                  ({
                    id,
                    name,
                    original_language,
                    vote_average,
                    poster_path,
                    overview,
                  }) => {
                    return (
                      <CardFilm
                        key={id}
                        overview={overview}
                        poster={poster_path}
                        title={name}
                        vote_average={vote_average}
                        original_language={original_language}
                      />
                    );
                  },
                )}
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
