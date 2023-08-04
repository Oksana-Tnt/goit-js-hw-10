
 function createMarkupCatByBreed(arr){
    return arr.map(({url, breeds:[{name, description, temperament}]})=>
        `
         <img src="${url}" alt="${name}" width="450">
         <h2>${name}</h2>
         <p>${description}</p>
         <p>${temperament}</p>

        `).join("");
 };


export{createMarkupCatByBreed};