import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
const { Notify } = require("notiflix");
 const refs = {
    select: document.querySelector('.breed-select'),
     descr: document.querySelector('.cat-info'),
     loader: document.querySelector('.loader'),
    error: document.querySelector ('.error')
};

// fetchBreeds()
//         .then((data) => {
//         return data.map(({id, name}) =>
//         {
//             new SlimSelect({
//   select: '#single'
// })
fetchBreeds()
     .then(result => {
          renderBreeds(result);
     }).then(() => {
          new SlimSelect({
               select: '.breed-select'
          })
     })
     function renderBreeds(breeds) {
        const markup = breeds
             .map((breed) => {
                  return `<option value="${breed.id}">${breed.name}</option>`
             })
             .join("");
         refs.select.innerHTML = markup;
         refs.loader.style.display = "none"
   }

refs.select.addEventListener('change', onOptionSubmit);

function onOptionSubmit(event) {
    const selectedValue = event.currentTarget.value;
    fetchCatByBreed(selectedValue) .then((data) => {
        return data.map(() =>
        {
                                  
           return refs.descr.innerHTML=createMarkup(data)
        })})
}
function createMarkup(arr) {
    
    return arr.map((element)=>`
      <img class="cat-img" src="${element.url}" alt="" width="200" height />
      <div class="cat-descr"> <h2 class="descr-name">${element.breeds[0].name}</h2>
        <h3 class="descr-text">${element.breeds[0].description}</h3>
    </div>` ).join('')
           
      
   
}

