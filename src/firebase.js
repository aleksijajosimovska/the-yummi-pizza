import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyD7-lYFosC-opEvVSiSXep1zGjUGlGE6x0",
    authDomain: "the-yummi-pizza-11632.firebaseapp.com",
    databaseURL: "https://the-yummi-pizza-11632.firebaseio.com",
    projectId: "the-yummi-pizza-11632",
    storageBucket: "the-yummi-pizza-11632.appspot.com",
    messagingSenderId: "308037156734",
    appId: "1:308037156734:web:01b63cec721211969c7d2f",
    measurementId: "G-EBT2LXF6B4"
}

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	// login(email, password) {
	// 	return this.auth.signInWithEmailAndPassword(email, password)
	// }

	// logout() {
	// 	return this.auth.signOut()
	// }

	// async register(firstname, lastname,  email, password) {
	// 	await this.auth.createUserWithEmailAndPassword(email, password)
	// 	return this.auth.currentUser.updateProfile({
	// 		displayName: firstname, lastname
	// 	})
	// }

	// addQuote(quote) {
	// 	if(!this.auth.currentUser) {
	// 		return alert('Not authorized')
	// 	}

	// 	return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
	// 		quote
	// 	})
	// }

	// isInitialized() {
	// 	return new Promise(resolve => {
	// 		this.auth.onAuthStateChanged(resolve)
	// 	})
	// }

	// getCurrentUsername() {
	// 	return this.auth.currentUser && this.auth.currentUser.displayName
	// }

	// async getCurrentUserQuote() {
	// 	const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
	// 	return quote.get('quote')
	// }
}

export default new Firebase()