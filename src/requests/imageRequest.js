import axios from "axios"
const myApiKey = "tKKlen8YAEn85W30MqO34s_VR-gxxy-Z4a-EXAQm7xo";
const BASE_LINK = `https://api.unsplash.com`;

axios.defaults.baseURL = BASE_LINK;

let per_page = 20;


export const makeRequest = async (query, page = 1) => {

    const responce = await axios({
        method: 'get',
        url: '/photos',
        params: {
            client_id: myApiKey,
            page: page,
            per_page: per_page,
            query: query,

        }
    })
    console.log(responce)
    return responce.data;

}