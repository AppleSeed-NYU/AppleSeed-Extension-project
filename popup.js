


var el = document.getElementById("_points__button");
if(el){
    el.addEventListener("click", chrome.action.setPopup({
        popup: "second_page.html"
     }));
}
function changePopup(){
    chrome.action.setPopup({
       popup: "second_page.html"
    });
}

