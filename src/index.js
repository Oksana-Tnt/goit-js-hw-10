import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import { createSlimSelectorByBreed, createMarkupCatByBreed } from "./templates/cat-markup";
import SlimSelect from "slim-select";
import "slim-select/dist/slimselect.css"

const selectEl = document.querySelector(".breed-select");
const error = document.querySelector(".error");
const loader = document.querySelector(".loader");
const info = document.querySelector(".cat-info");

window.addEventListener("load", onLoadBreeds);
selectEl.addEventListener("change", onSelectCat);

function onLoadBreeds(){
    info.innerHTML = '';
    fetchBreeds()
    .then (data => {selectEl.innerHTML=createSlimSelectorByBreed(data.data);
    createSlim();
    loader.style.display="none";
    })
    .catch (err=>console.log(err))

};

 function onSelectCat(evt){
    
    fetchCatByBreed(evt.target.value)
    .then(data=>{info.innerHTML=createMarkupCatByBreed(data.data);
         loader.style.display="none";
        }) 
         
     .catch(err=>console.log(err))
  
 };

 function createSlim(){
    const slim= new SlimSelect({
        select: "#slim-select",
    });
};