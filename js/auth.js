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

//signup function
function signUp() {
    var email = document.getElementById("email1");
    var password = document.getElementById("password1");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    //
    promise.catch(e => alert(e.message));
    alert("SignUp Successfully");
}

//signIN function
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}


//signOut

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
        window.location = "Home.html";
    } else {
        
    }
})
