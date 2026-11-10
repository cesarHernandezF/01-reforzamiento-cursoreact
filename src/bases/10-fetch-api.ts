import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'FQx9wBMzq3HoygTlbtc5WB9zIPeV70NM';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

/*myRequest.then( (response) => {
    response.json().then( (data) => {
        console.log(data);
    });
})
.catch((err) => {
    console.error(err);
});*/

const createImageInsideDom = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        // const imageUrl = data.data.images.original.url;
        // console.log(imageUrl);
        const imageUrl = data.images.original.url;
        createImageInsideDom(imageUrl);

    } )
    .catch((err) => {
        console.error(err);
    });