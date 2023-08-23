import { fetchBreeds } from "./js/cat-api"
import { fetchCatByBreed } from "./js/cat-api"
export const refs = {
    select: document.querySelector('.breed-select'),
}

fetchBreeds()
        .then((data) => {
        return data.map(({id, name}) =>
        {
            refs.select.insertAdjacentHTML('beforeend', `<option value="${id}">${name}</option>`)
        })})
        // refs.select.innerHTML=Element.name}))
        console.dir(refs.select)
    
refs.select.addEventListener('input', onOptionSubmit);
function onOptionSubmit(event) {
    event.preventDefault();
    fetchCatByBreed(event.currentTarget.value)
     
   
}

