const img = document.querySelector('img');
let gif;

const button = document.querySelector("button");
const search = document.querySelector("#barra-buscadora");

button.addEventListener("click", function(){
  let buscar = search.value;
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=dkpMjVE3vSt5H9FVWmn9c8WuRVIlbqQ7&s='+buscar+'\'', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    if(response.data.images == undefined){
      console.log("no se encontraron imagenes");
      img.src = "resources/noImage.png";
    }else{
      console.log(response.data.images.original.url);
      gif = response.data.images.original.url;
      img.src = gif;
    }
    
  })
});

