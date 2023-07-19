import axios from "axios";

export const HEADER_NAME = 'Authorization'
const header = {
    'Authorization': localStorage.getItem(HEADER_NAME),
};

export const config = {
    headers: header
}

export const BASE_URL = 'http://localhost:8080'
export const setId = loginId => localStorage.setItem(HEADER_NAME, loginId)
export const getId = localStorage.getItem(HEADER_NAME);

export const get = (uri, config) => axios.get(BASE_URL + uri, config)
export const post = (uri, data, config) => axios.post(BASE_URL + uri, data, config)
export const del = (uri, config) => axios.delete(BASE_URL + uri, config)
