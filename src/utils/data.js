import axios from "axios";

export async function getData(endpoint) {
  let response = await axios.get(`https://wizard-world-api.herokuapp.com/${endpoint}`);
  return response.data;
}

export async function getData1() {
  let response = await axios.get(`https://hp-api.herokuapp.com/api/characters`);
  return response.data;
}