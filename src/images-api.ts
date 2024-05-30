import axios from "axios";

const KEY: string = "I8M3Tskhexos2hlxxS2fNs3Zp93TK6TN6fzmKp6vzbE";

axios.defaults.baseURL = `https://api.unsplash.com/search/photos`;

interface IImgInfo {
    query: string;
    page: number;
    per_page: number;
    client_id: string;
    orientation: string;
}

export default interface IResponse {
    results: {
        id: string;
        alt_description: string;
        urls: {
            small: string;
        };
        user: {
            profile_image: {
                small: string;
            };
            name: string;
        };
    }[];
}

export const fetchImages = async (
    topic: string,
    page: number
): Promise<IResponse | void> => {
    try {
        const response = await axios.get<IResponse>("", {
            params: {
                query: topic,
                page: page,
                per_page: 20,
                client_id: KEY,
                orientation: "landscape",
            },
        });

        return response.data;
    } catch (error) {
        console.log("Fetch error", error);
    }
};
