import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import { createMarkupCatByBreed } from "./templates/cat-markup";
import SlimSelect from "slim-select";
import "slim-select/dist/slimselect.css"
import Notiflix from 'notiflix';

const selectEl = document.querySelector(".breed-select");
const errorEl = document.querySelector(".error");
const loader = document.querySelector(".loader");
const info = document.querySelector(".cat-info");
    
window.addEventListener("load", onLoadBreeds);
selectEl.addEventListener("change", onSelectCat);


function onLoadBreeds(){
    info.innerHTML = '';
       
    fetchBreeds()
        .then(data => {        
                                  
            const slim = new SlimSelect({
                select: "#slim-select",
                data: data.data.map(({name, id}) => ({ text: name, value : id})),
            });                            
                  
             hidden();
        })  
        .catch(catchError);
};
  
   
function onSelectCat(evt) {
    
    info.innerHTML = "";
    hidden();
    fetchCatByBreed(evt.target.value)
        .then(data => {
            info.innerHTML = createMarkupCatByBreed(data.data);
            hidden();
        })
                            
        .catch(catchError);      
    
 };

    function hidden(){
    loader.classList.toggle('is-hidden')
    loader.classList.toggle('loader')
};
 
// function createSlim() {
//     const slim = new SlimSelect({
//         select: "#slim-select",
//     });
// };

function catchError() {
    Notiflix.Report.failure(`${errorEl.textContent}`)
}