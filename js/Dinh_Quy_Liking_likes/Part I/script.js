var likecount = 3;
var countElement = document.querySelector("#likecount")

console.log(countElement);

function addlike() {
    likecount++;
    countElement.innerText = likecount + " like(s)";
    console.log(likecount);
}