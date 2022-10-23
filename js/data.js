var firebaseConfig = {
    apiKey: "AIzaSyB0rAVj2Vj7mk8DXkoovvt3l6BSL4x8CAA",
  authDomain: "cognizance-bb47e.firebaseapp.com",
  projectId: "cognizance-bb47e",
  storageBucket: "cognizance-bb47e.appspot.com",
  messagingSenderId: "783710377893",
  appId: "1:783710377893:web:38dce16cebe6d725a23a4c",
  measurementId: "G-XFH9E9EZCS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const storageRef = storage.ref();

//signOut

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
    } else {
        alert("No active user");
        window.location = 'signup.html';
    }
})

function uploadrem() {
    alert('Uploaded your reminder!')
  var file = document.getElementById("name").value;
var hour = document.getElementById("hour").value;
var minute = document.getElementById("min").value;
var opt = document.getElementById("opt").value;


const videosRef = storageRef.child("Reminders/Med1/" + file + "/" + hour + ':' + minute + ' ' + opt);
videosRef.put(hour + ':' + minute + ' ' + opt).then((snapshot) => {
  alert('Uploaded your reminder!');
});
}