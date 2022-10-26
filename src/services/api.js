import { endPointInitial } from "../utils/constants"

export const ApiService = async (callback) => {
    fetch(endPointInitial, {})
        .then(res => res.json()
        .then(async (data) => {
            const urls = data.results.map(item => item.url)
            const response = await getBatch(urls);
            callback(response);
        })
        .catch(e => console.error(e)))
};

const getBatch = async (urls) => {
    try {
        const response = await Promise.all(urls.map(url => fetch(url).then(res => res.json()).then(data => data)));
        return response;
    } catch (error) {
        console.error(error);
    }
}