chrome.runtime.sendMessage({command: "fetch"}, (response) =>{
    showData(response.data);
});

chrome.runtime.sendMessage({command: "post", data:"Test data"}, (response) =>{
    showData(response.data);
});


var showData = function(data){
    console.log("From Appleseed--", data)
}