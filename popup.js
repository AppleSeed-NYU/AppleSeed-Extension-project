


var el = document.getElementById("myButton");
if(el){
    el.addEventListener("click", chrome.action.setPopup({
        popup: "second_page.html"
     }));
}
// function changePopup(){
//     chrome.action.setPopup({
//        popup: "second_page.html"
//     });
// }

