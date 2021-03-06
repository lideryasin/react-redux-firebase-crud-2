import { GET_NOTES } from '../actionsTypes';
import { database } from '../firebase';

export function getNotes() {
    return dispatch => {
        database.on('value', snapshot => {
            dispatch({
                type: GET_NOTES,
                payload: snapshot.val()
            })
        })
    }
}

export function saveNote(note) {
    return dispatch => database.push(note)
}

