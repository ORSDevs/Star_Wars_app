const BASE_URL = "https://swapi.tech/api";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching data from SWAPI:", error);
    return [];
  }
}

export async function fetchItems(endpoint, filter = "", asc = true) {
  const items = await fetchData(endpoint);

  return items
    .filter(
      (item) =>
        filter.length === 0 ||
        item.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort(
      asc
        ? (a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
        : (a, b) => (a.name < b.name ? 1 : a.name === b.name ? 0 : -1)
    );
}

export async function fetchFilms(filter = "", asc = true) {
  try {
    console.log("Fetching films...");

    const data = await fetchData("films");

    const filteredFilms = data.filter((film) =>
      film.title.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedFilms = filteredFilms.sort((a, b) =>
      asc
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    return sortedFilms;
  } catch (error) {
    console.error("Error fetching films:", error);
    return [];
  }
}
