importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBsiFkXMwJsHO-to1iA-LEq9jqV-O9rPOw",
    authDomain: "chalobazar-12add.firebaseapp.com",
    databaseURL: "https://chalobazar-12add-default-rtdb.firebaseio.com",
    projectId: "chalobazar-12add",
    storageBucket: "chalobazar-12add.appspot.com",
    messagingSenderId: "731237474632",
    appId: "1:731237474632:web:8fb908f31f8798f205937d",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});