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


}

export default new Firebase()