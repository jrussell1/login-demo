/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAJL8x08SRMEYMMtn13bD69hZHjWZC_zmM",
    authDomain: "mud-4e9fe.firebaseapp.com",
    databaseURL: "https://mud-4e9fe.firebaseio.com",
    storageBucket: "mud-4e9fe.appspot.com",
  };
  firebase.initializeApp(config);

  

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = 'YOUR_OAUTH_CLIENT_ID';