import { useSearch } from "../contexts/SearchContext";

export default function HomePage() {
  const { dataValues } = useSearch();
  return (
    <main>
      <section>
        <div>
          {dataValues.map((el) => {
            return <div key={el.id}>{el.title}</div>;
          })}
        </div>
      </section>
    </main>
  );
}
