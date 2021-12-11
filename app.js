
var domain = window.location.hostname;

domain = domain.replace("http://","").replace("https://","").replace("www.","").split(/[/?#]/)[0];
console.log("From Appleseed--", domain)

chrome.runtime.sendMessage({command: "fetch", data: {domain: domain}}, (response) =>{
    // response from db (bg.js --> firebase.js)
    showData(response.data);

    console.log('response from database', response);

    parseXXXXs(response.data);
});


chrome.runtime.sendMessage({command: "post", data:"Test data"}, (response) =>{
    showData(response.data);
});


var showData = function(data){
    console.log("From Appleseed--", data)
}


// when user click purchase, add points
var createEvents = function(){
    document.querySelector("._points__button .sumbit-button").addEventListener('click', function(event){
        document.querySelector("._points__list ._submit-overlay").style.display = "block";
    });

    
}



var parseXXXXs = function(XXXXs){
    try{
        var xxxHTML = "";
        XXXXs.forEach(function (xxxx, index) {
            xxxHTML += '<li>You got ' + xxxx.points + 'points./li>';
          });

    }catch(e){
        console.log("no points found for this domain", e)
    }

}