import axios from "axios";

const API_KEY = "live_yekJuOuLC9g8igOgre3AOmu5EN2cGWeRdT2COj6LQjY43f70P5wJDYj5rIZ9aeBT";
const BASE_URL = "https://api.thecatapi.com/v1";

axios.defaults.headers.common["x-api-key"] = API_KEY;

function fetchBreeds(){
    return axios.get(`${BASE_URL}/breeds`);
};

function fetchCatByBreed(breedId){
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`);
};

export{fetchBreeds, fetchCatByBreed};

