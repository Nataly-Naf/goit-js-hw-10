
import { refs } from ".."
const { Notify } = require("notiflix");



const baseURL = "https://api.thecatapi.com/v1/breeds"
    const apiKey = 'live_dbDbJqnTvZr0BDH9Co8mAYy9oHsrrkDXPCQwO90tvsGws3MQGSe2ul7QIaHBeS63'
export function fetchBreeds() {
    
    const params = new URLSearchParams({
        key: apiKey,
        

    })
    return fetch(`${baseURL}?${params}`)
        // .then(response => { return response.json() })
        // .then((data) => { (consol.log(data)) }
        .then((resp) => {
                      if (!resp.ok) {
             ( Notify.failure(`${resp.statusText}`))
            }
            return resp.json()
        })
    
}

export function fetchCatByBreed(breedId) {
    const breedIds = breedId;
    const breedUrl = 'https://api.thecatapi.com/v1/images/search'
    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_dbDbJqnTvZr0BDH9Co8mAYy9oHsrrkDXPCQwO90tvsGws3MQGSe2ul7QIaHBeS63&breed_ids=${breedId}`)
        .then((resp) => {
              if (!resp.ok) {
             ( Notify.failure(`${resp.statusText}`))
            }
            return resp.json()
     })
   
}

function createMarkup(arr) {
    
    return arr.map((element)=>`
      <img src="${element.url}" alt="" width="200" height />
      <div class="cat-descr"> <h2 class="descr-name">${element.breeds[0].name}</h2>
        <h3 class="descr-text">${element.breeds[0].description}</h3>
    </div>` ).join('')
           
      
   
}
