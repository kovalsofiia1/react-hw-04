import axios from "axios"
const myApiKey = "tKKlen8YAEn85W30MqO34s_VR-gxxy-Z4a-EXAQm7xo";
const BASE_LINK = `https://api.unsplash.com`;

axios.defaults.baseURL = BASE_LINK;

let per_page = 8;


export const makeRequest = async (myquery, page) => {
    try {
        const responce = await axios.get('/search/photos',
            {
                params: {
                    client_id: myApiKey,
                    page: page,
                    per_page: per_page,
                    query: myquery,

                }
            }
        )
        console.log(responce)
        return responce.data.results;
    }
    catch(error) {
        throw new Error('Error getting images!');
    }
}