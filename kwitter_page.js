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
  user_name = localStorage.getItem("username");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    login :user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       login1 = message_data['login'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ login1 +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(e)
{
  console.log("clicked on like button - " + e);
	button_id = e;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(e).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
