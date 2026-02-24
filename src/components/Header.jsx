import { useSearch } from "../contexts/SearchContext";
export default function Header() {
  const { test } = useSearch();
  return (
    <>
      <h1>{test}</h1>
    </>
  );
}
