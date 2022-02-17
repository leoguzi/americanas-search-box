import axios from "axios";

const API_URL =
  "https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=";
const API_SOURCE = "nanook";

function searchProducts(searchText) {
  return axios.get(`${API_URL}${searchText}&source=${API_SOURCE}`);
}

export { searchProducts };
