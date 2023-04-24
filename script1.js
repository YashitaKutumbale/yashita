const firebaseConfig = {
  apiKey: "AIzaSyBTAPqh4FsL9mIVxBb7mpWOrBFJmemjlbw",
  authDomain: "yashita-13550.firebaseapp.com",
  databaseURL: "https://yashita-13550-default-rtdb.firebaseio.com",
  projectId: "yashita-13550",
  storageBucket: "yashita-13550.appspot.com",
  messagingSenderId: "169610878313",
  appId: "1:169610878313:web:0217aed3b49f8661a771f8",
  measurementId: "G-ZPH3ZLR0EJ"
};
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}