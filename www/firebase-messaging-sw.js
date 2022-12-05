// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.12.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDgjcuF2_6smK5QUfPGuuqElcxfhlM778A",
    authDomain: "ionic-a0bf2.firebaseapp.com",
    projectId: "ionic-a0bf2",
    storageBucket: "ionic-a0bf2.appspot.com",
    messagingSenderId: "739112703448",
    appId: "1:739112703448:web:607c3a29ac75fc511dcead",
    measurementId: "G-NSRNH2VYR7"
  }

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});