import axios from "axios";

const KEY = "I8M3Tskhexos2hlxxS2fNs3Zp93TK6TN6fzmKp6vzbE";

axios.defaults.baseURL = `https://api.unsplash.com/search/photos`

export const fetchImages = async (topic, page) => {
  const response = await axios.get('', {
            params: {
                query: topic, 
                page: page,
                per_page: 20, 
                client_id: KEY, 
                orientation:'landscape' ,
    },
  });

  return response.data;
};
