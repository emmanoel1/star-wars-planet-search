const planetsApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const search = await fetch(url);
  const results = await search.json();
  return results;
};

export default planetsApi;
