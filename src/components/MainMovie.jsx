import { useSearch } from "../contexts/SearchContext";
import CardFilm from "../components/CardFilm";
export default function MainMovie() {
  const { dataValues, isLoading } = useSearch();
  return (
    <>
      {dataValues.length > 0 && (
        <main>
          <section>
            <div className="div-title">
              <h2>FILM</h2>
              <div className="div-wrap">
                {dataValues.map(
                  ({
                    id,
                    title,
                    original_language,
                    vote_average,
                    poster_path,
                    overview,
                  }) => {
                    return (
                      <CardFilm
                        key={id}
                        overview={overview}
                        title={title}
                        vote_average={vote_average}
                        original_language={original_language}
                        poster={poster_path}
                      />
                    );
                  },
                )}
              </div>
            </div>
          </section>
        </main>
      )}
      {isLoading && <div className="loader">LOADING...</div>}
    </>
  );
}
