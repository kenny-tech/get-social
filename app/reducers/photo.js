import { POST_PHOTO, POST_PHOTO_ERROR } from '../actions/types';

export default (state=[], action) => {
    switch(action.type) {
        case POST_PHOTO: 
            return {
                ...state,
                photo: action.payload,
                photo_error: ''
            }
        case POST_PHOTO_ERROR: 
            return {
                ...state,
                photo_error: action.payload
            }
        default:
            return state;
    }
}