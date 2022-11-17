console.log("page loading...");

// index    0   1   2
var likes = [9, 12, 9];
var spans = [
    document.querySelector('#num1postlike'),
    document.querySelector('#num2postlike'),
    document.querySelector('#num3postlike')
];

function addlike(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)";
}