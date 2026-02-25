import { useSearch } from "../contexts/SearchContext";

export default function Header() {
  const { setInput, setSubmit } = useSearch();
  return (
    <header>
      <section className="sec-head">
        <div className="div-head">
          <h1>BOOLFLIX</h1>
          <h1>B</h1>
          <div>
            <form className="search-form" onSubmit={setSubmit}>
              <input
                onChange={setInput}
                name="search-bar"
                type="text"
                placeholder="Type here..."
              />
              <button className="button-search">Search</button>
            </form>
          </div>
        </div>
      </section>
    </header>
  );
}
