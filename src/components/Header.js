import { useRef } from "react";
import { useKey } from "../useKey";

// it's a structured component
export default function Header({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
// its a presentational / stateless component
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
// it's a stateful component
function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
// its a presentatoinal / stateless component
function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found<strong>{movies.length}</strong> results
    </p>
  );
}
export { SearchBar, NumResults };
