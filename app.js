var domain = window.location.hostname;

domain = domain.replace("http://","").replace("https://","").replace("www.","").split(/[/?#]/)[0];
console.log("This is the first line of app.js. Message From Appleseed--", domain)



var targetExtensionId = "klbcnkjjoboefpakcmgfcbfamjokhjaf";
chrome.runtime.sendMessage(targetExtensionId, {type: 'MsgFromPage', command: "post", data:{domain: domain, user: user}, msg: 'Hello, I am page~', greeting: "hello"}, function(response) {
    console.log("Response From Appleseed--",response);

  });



chrome.runtime.sendMessage({command: "fetch", data: {domain: domain}, greeting: "hello"}, (response) =>{
    // response from db (bg.js --> firebase.js)
    console.log('Response from database', response);
    // parseXXXXs(response.data);
});







