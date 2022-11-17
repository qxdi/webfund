var animalImg = document.querySelector("#superCat");

console.log(animalImg);

function pickCat(element) {
    element.remove(); 
    // element.style.backgroundColor = "goldenrod";
    // console.log(element);
    animalImg.src = "photo/pet-cat.jpg";
    // console.log(animalImg.src);
}

function pickDog(element) {
    console.log(element.classList);
    element.classList.add("btn");
    animalImg.src = "photo/Golden-Retriever-Puppy.jpg";
    // console.log(animalImg.src);
}