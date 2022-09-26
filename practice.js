const firebaseConfig = {
    apiKey: "AIzaSyAmqp28-uCxJF3AIBRnshtvzmhz_9YbXrs",
    authDomain: "messges-4ce16.firebaseapp.com",
    databaseURL: "https://messges-4ce16-default-rtdb.firebaseio.com",
    projectId: "messges-4ce16",
    storageBucket: "messges-4ce16.appspot.com",
    messagingSenderId: "525451651566",
    appId: "1:525451651566:web:c4d150faa1a6939f7746ff",
    measurementId: "G-5V5HMZC14Q"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS


function add_user(){
username = document.getElementById("username").value;

firebase.database().ref("/").child(username).update({
    purpose:"adding user"
})
}