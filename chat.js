// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBmZivw6Kk9x9TRqQGmgtJMmeXiLwVNlkk",
    authDomain: "lets-chat-16952.firebaseapp.com",
    projectId: "lets-chat-16952",
    storageBucket: "lets-chat-16952.appspot.com",
    messagingSenderId: "1052279351308",
    appId: "1:1052279351308:web:858a7755eaa34375f8e629"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



