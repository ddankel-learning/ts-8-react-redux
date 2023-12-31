import { useState } from "react";
import useActions from "../hooks/useActions";

const SearchForm = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
