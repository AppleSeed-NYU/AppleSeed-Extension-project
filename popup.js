


var myButton = document.getElementById("updateNow");
if(myButton){
    console.log("mybutton", myButton)
    myButton.addEventListener("click", changePopup);
}
function changePopup(){
    chrome.action.setPopup({
       popup: "second_page.html"
    });
}

