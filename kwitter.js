function change(){
   x= document.getElementById("login").value;
   localStorage.setItem("username",x);
   window.location="kwitter_room.html";
}