import { useSearch } from "../contexts/SearchContext";

export default function Header() {
  const { setInput, searchInput } = useSearch();
  return (
    <header>
      <section>
        <div>
          <div>
            <form>
              <input
                onChange={setInput}
                name="search-bar"
                type="text"
                placeholder="Type here..."
              />
              <button>Search</button>
            </form>
          </div>
          <div>{searchInput}</div>
        </div>
      </section>
    </header>
  );
}
