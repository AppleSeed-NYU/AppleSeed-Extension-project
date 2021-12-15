
// always waits the document to be loaded when shown

// if( document.readyState !== 'loading' ) {
//     console.log( 'document is already ready, just execute code here' );
//     var myButton = document.getElementById("water");
//     console.log("got water button", myButton)
//     if(myButton){
//         console.log(" button clicked")
//         myButton.addEventListener("click", changePopup, false);
//     }
// } else {
//     document.addEventListener('DOMContentLoaded', function () {
//         console.log( 'document was not ready, place code here' );
//         var myButton = document.getElementById("water");
//         console.log("got water button", myButton)
//         if(myButton){
//             console.log(" button clicked")
//             myButton.addEventListener("click", changePopup, false);
//         }
// //     });
// }


// write data to database
var myButton = document.getElementById("water");
console.log("got water button", myButton)
if(myButton){
    console.log(" button clicked")
    myButton.addEventListener("click", waterFunction, false);}

// document.getElementById("water").onclick = function waterFunction(userId, name, points, trees) {
//     console.log("writing user data")
//     firebase.database().ref('users/' ).set({
//       id: "2",
//       name: "new user",
//       points: 19,
//       trees : "id2"
//     });
//   }


// document.getElementById("water").onclick = function waterFunction(userId, name, points, trees) {
//     console.log("writing user data")
//     firebase.database().ref('users/' + userId).set({
//       name: name,
//       points: points,
//       trees : trees
//     });
//   }
 

// test function
// function writeToDatabase(){
//     console.log("writing user data")
//     firebase.database().ref('/' ).set({
//       id: "2",
//       name: "new user",
//       points: 19,
//       trees : "id2"
//     });
// }


function waterFunction(){
    // minus 1 points
    // console.log("writing user data")
    // firebase.database().ref('users/' ).set({
    //   id: "2",
    //   name: "new user",
    //   points: 19,
    //   trees : "id2"
    // });

    chrome.action.setPopup({
        popup: "tree_growing1.html"
    });
}
    
    

function changePopup(){
    chrome.action.setPopup({
       popup: "confirmation_page.html"
    });
}

