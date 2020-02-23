console.log('%c HI', 'color: firebrick')
let images;
let breedHash;
const breedCont = document.querySelector("#dog-breeds");

document.addEventListener("DOMContentLoaded", event => {
    loadImages();
    loadBreeds();
    breedListener();
    breedFilter();
})


function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => {
        images = data.message;
        let html = "";
        for(const url of images){
            html += `<img src=${url} height="300" width="300" />`
        }
        const dogCont = document.querySelector("#dog-image-container")
        console.log(html)
        dogCont.innerHTML = html;
    })
}


function loadBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => {
        breedHash = data.message;
        const breedCont = document.querySelector("#dog-breeds");
        let html = ""
        for(const key in breedHash){
            html += `<li style="color:blue">${key}</li>`
        }
        breedCont.innerHTML = html
    })
}

function breedListener(){
    const breedCont = document.querySelector("#dog-breeds");
    breedCont.addEventListener("click", (event) => {
        const breed = event.target;
        breed.style = "color:red"; 
    })
}

function breedFilter(){
    const breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener("change", (event) => {
        const letter = event.target.value;
        let html = "";
        const breedCont = document.querySelector("#dog-breeds");
        for(const key in breedHash){
            if (key[0] == letter){
                html += `<li style="color:blue">${key}</li>`
            }
        }
        breedCont.innerHTML = html;
    })
}