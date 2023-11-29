import useTypedSelector from "../hooks/useTypedSelector";
import RepositoriesList from "./RepositoriesList";

const SearchResults = () => {
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  return (
    <div>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data && <RepositoriesList repositories={data} />}
    </div>
  );
};

export default SearchResults;
