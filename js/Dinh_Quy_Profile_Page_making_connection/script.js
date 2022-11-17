console.log("page loaded...");

function changename(element){
    console.log(changename);
    document.getElementById("account-name").innerText = "Jessy Jones";
}

// when clicking on accept icon, this will decrease request number by 1, increase total friends by 1, and removed the user in the friend request box

var requestCount = document.querySelector("#badge1");
var friendListCount = document.querySelector("#badge2");

// var acceptbttn = document.querySelector("")
function acceptfriend(id){
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
    friendListCount.innerText++;
    
    console.log(requestCount);
    console.log(friendListCount);
}
function denyfriend(id){
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
    console.log(requestCount);
}