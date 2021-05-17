const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // prevents refresh from submit button
    const searchTerm = form.elements.query.value; // 
    const config = {
        params: {
            q: searchTerm
        },
        headers: {}
    }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    console.log(res.data[0].show.image.medium)
    makeImages(res.data)
    form.elements.query.value = ''
})


const makeImages = (shows) => {
    for (let result of shows) { // looping through the array of data we queried
        if (result.show.image) { // this if checks if the api query contains an image and creates one if it does
            const img = document.createElement('img') // creates an html img
            img.src = result.show.image.medium // sets the source equal to the queried image
            document.body.append(img) // appends it to the body
        }
    }
}