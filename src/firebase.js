import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyC-xAWnGRpV6ndT9GIp7dqIVhj_5toWfQw",
	authDomain: "merry-e3b97.firebaseapp.com",
	projectId: "merry-e3b97",
	storageBucket: "merry-e3b97.appspot.com",
	messagingSenderId: "951050260593",
	appId: "1:951050260593:web:82645fd65a994163128bd0",
	measurementId: "G-XJY1WQBQDS",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
