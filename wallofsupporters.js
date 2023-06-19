const firebaseConfig = {
      apiKey: "AIzaSyCMjlVaJOQSmgDaZCcm_ONAPF0w_QlSSlk",
      authDomain: "kwitter-34a76.firebaseapp.com",
      databaseURL: "https://kwitter-34a76-default-rtdb.firebaseio.com",
      projectId: "kwitter-34a76",
      storageBucket: "kwitter-34a76.appspot.com",
      messagingSenderId: "268926747200",
      appId: "1:268926747200:web:3e10e21873b1e64140d5a5",
      measurementId: "G-KVNMDCXBTZ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Your Name - " + Room_names);
       row = "#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update
      ({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message: msg,
            like : 0
      });

      document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});