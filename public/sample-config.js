var config = {
  apiKey: "AIzaSyBe2jdUw9R3oZ0ENJDwGyryqnaeenJJIEM",
  authDomain: "fir-oauth-demo-63113.firebaseapp.com",
  databaseURL: "https://fir-oauth-demo-63113.firebaseio.com",
  projectId: "fir-oauth-demo-63113",
  storageBucket: "fir-oauth-demo-63113.appspot.com",
  messagingSenderId: "354021368298"
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = 'fir-oauth-demo-63113';
