
var domain = window.location.hostname;

domain = domain.replace("http://","").replace("https://","").replace("www.","").split(/[/?#]/)[0];
console.log("From Appleseed--", domain)

chrome.runtime.sendMessage({command: "fetch", data:{domain: domain}}, (response) =>{
    // response from db (bg.js --> firebase.js)
    showData(response.data);
});

chrome.runtime.sendMessage({command: "post", data:"Test data"}, (response) =>{
    showData(response.data);
});


var showData = function(data){
    console.log("From Appleseed--", data)
}