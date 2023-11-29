interface RepositoriesListProps {
  repositories: string[];
}

const RepositoriesList = ({ repositories }: RepositoriesListProps) => {
  return (
    <>
      <h3>Matching Packages:</h3>
      {repositories.map((dataItem) => (
        <div key={dataItem}>{dataItem}</div>
      ))}
    </>
  );
};

export default RepositoriesList;
