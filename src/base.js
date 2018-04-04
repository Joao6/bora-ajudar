import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAvNoPTWRn13S99h7vfYR1X30fTT_mZupo',
  authDomain: 'bora-ajudar-06.firebaseapp.com',
  databaseURL: 'https://bora-ajudar-06.firebaseio.com',
  projectId: 'bora-ajudar-06',
  storageBucket: '',
  messagingSenderId: '49713098434'
};
const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export const auth = firebase.auth()
export default base