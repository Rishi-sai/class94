const firebaseConfig = {
    apiKey: "AIzaSyDRnwXTCuWUHGhW3lKM_lcXAktICu2GR0Q",
    authDomain: "kwitternew-9ffd9.firebaseapp.com",
    databaseURL: "https://kwitternew-9ffd9-default-rtdb.firebaseio.com",
    projectId: "kwitternew-9ffd9",
    storageBucket: "kwitternew-9ffd9.appspot.com",
    messagingSenderId: "802723871387",
    appId: "1:802723871387:web:d0046bdad28f9ea57ea43e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
        purpose:"adding user"
    });
}