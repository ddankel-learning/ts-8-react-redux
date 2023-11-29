import { useState } from "react";
import useActions from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

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
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data && (
        <>
          <h3>Matching Packages:</h3>
          {data.map((dataItem) => (
            <div key={dataItem}>{dataItem}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default RepositoriesList;
