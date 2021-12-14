
var domain = window.location.hostname;

domain = domain.replace("http://","").replace("https://","").replace("www.","").split(/[/?#]/)[0];
console.log("From Appleseed--", domain)



chrome.runtime.sendMessage({greeting: "hello"}, function(response){
    // response from db (firebase.js)
    console.log(response);
    console.log('response from database', response);
    console.log(response.farewell);
   
});


var targetExtensionId = klbcnkjjoboefpakcmgfcbfamjokhjaf
chrome.runtime.sendMessage(targetExtensionId, {type: 'MsgFromPage', msg: 'Hello, I am page~'}, function(response) {
    console.log(response);
    showData(response.data);
  });

chrome.runtime.sendMessage({command: "post", data:"Test data"}, (response) =>{
    // showData(response.data);
    console.log("From Appleseed--", data)
});



chrome.runtime.sendMessage({command: "fetch", data: {domain: domain}}, (response) =>{
    // response from db (bg.js --> firebase.js)
    showData(response.data);

    console.log('response from database', response);

    parseXXXXs(response.data);
});


var showData = function(data){
    console.log("From Appleseed--", data)
}


var installNode = document.creatElement('div');
installNode.id = 'my-chrome-extension-installed';
installNode.style.display = 'none';
installNode.setAttribute('version', chrome.extension.getManifest().version); // 把版本号放到属性里
installNode.innerText=JSON.stringify({key: 'value'}); // 把通信的data放到标签的html text里面
document.body.appendChild(installNode);
var eventFromChrome = document.createEvent('Event');
eventFromChrome.initEvent('EventFromChrome', true, true);
// 修改installNode的innerText把需要发送的消息内容放在里面
installNode.innerText = JSON.stringify({type: 'HELLO', msg: 'FMVP is nothing for me'});
// 发出事件
installNode.dispatchEvent(eventFromChrome);







// when user click purchase, add points
var myButton = document.getElementById("updataNow");
console.log("button", myButton)
if(myButton){
    console.log(" button clicked")
    myButton.addEventListener("click", changePopup, false);
}
function changePopup(){
    chrome.action.setPopup({
       popup: "second_page.html"
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