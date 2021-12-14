// use firebase.js as backgroud.js


try{ 
  // version 8.10.0
  self.importScripts('firebase/firebase-app.js', 'firebase/firebase-database.js');

  var firebaseConfig = {
    apiKey: "AIzaSyBH8OKhXXOXnDv7tyRWbQBF9LtivzLlu_k",
    authDomain: "network-project-demo.firebaseapp.com",
    projectId: "network-project-demo",
    storageBucket: "network-project-demo.appspot.com",
    messagingSenderId: "372449508560",
    appId: "1:372449508560:web:22ceb4e3e17f4236c432d5",
    measurementId: "${config.measurementId}"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  console.log("firebase", firebase);

  // var db = firebase.firestore();
  var database = firebase.database();
  console.log("database",database);


  // chrome.system.display.getInfo("DOMContentLoaded",(event)=>{
  //   console.log("DOM Loaded ")
  // })

//  test 
 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"});
    return true
    }
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // 可以针对sender做一些白名单检查
  // sendResponse返回响应
  if (request.type == 'MsgFromPage') {
    sendResponse({tyep: 'MsgFromChrome', msg: 'Hello, I am chrome extension~'});
  }
});


  // read 
  var starCountRef = firebase.database().ref('/');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    // updateStarCount(postElement, data);
  });
//  write
// var installNode = window.document.getElementById('my-chrome-extension-installed');
// if (installNode) {
//   console.log('Chrome extension is installed! Here is the infomation: ' + installNode.innerText);
// } else {
//   console.log('Chrome extention is not installed yet...');
// }
// // 监听installNode的EventFromChrome事件
// installNode.addEventListener('EventFromChrome', function() {
//   var data = JSON.parse(installNode.innerText);
//   console.log(data.msg);
// });

// document.getElementById("updateNow").onclick = function writeUserData(userId, name, email, imageUrl) {
//     console.log("writing user data")
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }


// var myButton = document.getElementById("updateNow");
// console.log("button", myButton)
// if(myButton){
//     console.log(" button clicked")
//     myButton.addEventListener("click", changePopup, false);
// }
// function changePopup(){
//     chrome.action.setPopup({
//        popup: "second_page.html"
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//   var btn = document.getElementById('updateNow');
//   if (btn) {
//     console.log(btn)
//     btn.addEventListener('click', changePopup);
//   }
// })

  // send to resp to app.js
  // ```  
  //   msg: all param in app.js's sendMessage function
  //   response: send response (points) to app.js's sendMessage function
  // ```
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    console.log(msg)
    if(msg.command == "fetch"){
      var domain = msg.data.domain;
      console.log("domain:", domain);
      var enc_domain = btoa(domain);
      firebase.database().ref('/').once('value').then(function(snapshot){
        response({type: "result", status: "success", data: snapshot.val(), request: msg})
    });
      firebase.database().ref('/domain/' + enc_domain).once('value').then(function(snapshot){
          response({type: "result", status: "success", data: snapshot.val(), request: msg})
      });

    if(msg.command == "post"){
        var domain = msg.data.domain;
        var enc_domain = btoa(domain);
        var user = msg.data.user;
        var points = msg.data.points;
        console.log("domain-post", domain);
        try{
          var newPost = firebase.database().ref('/').push().set({
            user: user,
            points: points

          });
          response({type: "result", status: "success", data: snapshot.val(), request: msg});

        }catch(e){
          console.log("error:", e);
          response({type: "result", status: "error", data: snapshot.val(), request: msg});
        }


    }
    

  }
  return true;

});
}catch(e){
  console.log(e);
}



// triggered when user click purchase 
// Achieve that by accessing the DOM, but service workers do not have access to windows or the DOM. 
// If your extension needs that, you can use libraries like jsdom or use chrome.windows.create and chrome.tabs.create. 
// It depends on your usage and what fits your needs.
