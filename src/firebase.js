import * as firebase from 'firebase'

var config = {

};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');
