import axios from "axios";

export function getPandemicData() {
  return axios.get("https://corona.lmao.ninja/countries");
}

export function getAllPandemicData() {
  return axios.get("https://corona.lmao.ninja/all");
}
