import axios from "axios";

const KEY: string = "I8M3Tskhexos2hlxxS2fNs3Zp93TK6TN6fzmKp6vzbE";

axios.defaults.baseURL = `https://api.unsplash.com/search/photos`;

export type Image = {
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    user: {
        profile_image: {
            small: string;
        };
        name: string;
        instagram_username: string;
    };
    likes: number;
    created_at: string;
};
export default interface IResponse {
    results: Image[];
    total_pages: number;
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
