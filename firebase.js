// use firebase.js as backgroud.js


try{ 
  // version 8.10.0
  // self.
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




//  write
 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log("writing user data")
    // try{  
      firebase.database().ref('/' ).set({
        users: {"info":
        { id: "2",
        name: "new user",
        points: 19,
        trees : {"info": {
          id: "5",
          size: "13"}} }}
      })
    //   }
    // });   
    //   response({type: "result", status: "success", data: snapshot.val(), request: msg});
    // }catch(e){
    //   console.log("error:", e);
    //   response({type: "result", status: "error", data: snapshot.val(), request: msg});
    // }        
    if (request.greeting === "hello")
      sendResponse({tyep: 'MsgFromChrome', msg: 'Hello, I am chrome extension~', farewell: "goodbye"});
    return true
    }
);


  // read 
  var starCountRef = firebase.database().ref('/');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    // updateStarCount(postElement, data);
    console.log("read data from database", data)
  });


  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    console.log(msg)
    if(msg.command == "fetch"){
      var domain = msg.data.domain;
      console.log("domain:", domain);
      var enc_domain = btoa(domain);

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
