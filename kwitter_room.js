  var firebaseConfig = {
    apiKey: "AIzaSyCPkj7NhtfDhD2fwxNm9iaEzhNqqwseDf4",
    authDomain: "letschat-3c72d.firebaseapp.com",
    databaseURL: "https://letschat-3c72d-default-rtdb.firebaseio.com/",
    projectId: "letschat-3c72d",
    storageBucket: "letschat-3c72d.appspot.com",
    messagingSenderId: "500367821149",
    appId: "1:500367821149:web:4614c8ea70dbfcd4d100b4",
    measurementId: "G-4WJ2MFGSPX"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  y= localStorage.getItem("username")
  document.getElementById("welcome").innerHTML="welcome :"+y+"!";
  function create(){
    p=document.getElementById("roomname").value;
    console.log("roomname",p);
    firebase.database().ref("/").child(p).set({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",p);
    window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       o = childKey;
      console.log("roomname of the child key",o);
      row = "<div class='room_name' id="+o+" onclick='redirectToRoomName(this.id)' >Room Name : "+ o +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(e){
  console.log("redirect function parameter",e);
localStorage.setItem("room_name", e);
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name")
  window.location="index.html";
}
