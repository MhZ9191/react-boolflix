import { useSearch } from "../contexts/SearchContext";

export default function Header() {
  const { setInput, searchInput, setSubmit, searchSubmit } = useSearch();
  return (
    <header>
      <section>
        <div>
          <div>
            <form onSubmit={setSubmit}>
              <input
                onChange={setInput}
                name="search-bar"
                type="text"
                placeholder="Type here..."
              />
              <button>Search</button>
            </form>
          </div>
        </div>
      </section>
    </header>
  );
}
