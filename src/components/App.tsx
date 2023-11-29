import { Provider } from "react-redux";
import { store } from "../state";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search NPM Packages</h1>

      <SearchForm />
      <SearchResults />
    </Provider>
  );
};

export default App;
