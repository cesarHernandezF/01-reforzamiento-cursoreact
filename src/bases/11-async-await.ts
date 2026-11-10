import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'FQx9wBMzq3HoygTlbtc5WB9zIPeV70NM';

const createImageInsideDom = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data } = (await response.json()) as GiphyRandomResponse;
    return data.images.original.url;
}

// getRandomGifUrl().then(
//     (url) => createImageInsideDom(url)
// );

getRandomGifUrl().then(createImageInsideDom);