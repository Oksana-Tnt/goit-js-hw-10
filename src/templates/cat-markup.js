

// function createSlimSelectorByBreed(arr){
//     return arr
//     .map(({ id, name }) => `<option value='${id}'>${name}</option>`)
//     .join();
// };

import SlimSelect from "slim-select";
import "slim-select/dist/slimselect.css";

function createSlimSelectorByBreed(arr){
    return new SlimSelect({
        select: "#slim-select",
        data : arr.map(({id, name})=>[{text : name, value : id}])
    })
};

 function createMarkupCatByBreed(arr){
    return arr.map(({url, breeds:[{name, description, temperament}]})=>
        `
         <img src="${url}" alt="${name}" width="450">
         <h2>${name}</h2>
         <p>${description}</p>
         <p>${temperament}</p>

        `).join("");
 };


export{createSlimSelectorByBreed, createMarkupCatByBreed};