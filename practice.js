//ADD YOUR FIREBASE LINKS *DONE*
var firebaseConfig = {
    apiKey: "AIzaSyAKcUZTesRZzw-qPjmjtKSHza2Frt-7Yps",
    authDomain: "class94-51c02.firebaseapp.com",
    databaseURL: "https://class94-51c02-default-rtdb.firebaseio.com",
    projectId: "class94-51c02",
    storageBucket: "class94-51c02.appspot.com",
    messagingSenderId: "532624927578",
    appId: "1:532624927578:web:d7eb8c66a779c9ce576163"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//adduser funtion 

function adduser(){
    var username= document.getElementById("username").value; 
    firebase.database().ref("/").child(username).update({ purpose : "adding user name"
    });
}