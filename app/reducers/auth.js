import { SIGNUP, SIGNUP_ERROR, SIGNIN, SIGNIN_ERROR } from "../actions/types";
  
export default (state=[], action) => {
    switch(action.type) {
        case SIGNUP:      
            return  { 
                ...state, 
                user: action.payload,
                errorMessage: ''
            }  
        case SIGNUP_ERROR:      
            return  { 
                ...state, 
                errorMessage: action.payload,
            }    
        case SIGNIN:      
            return  { 
                ...state, 
                user: action.payload,
                errorMessage: ''
            }  
        case SIGNIN_ERROR:      
            return  { 
                ...state, 
                errorMessage: action.payload,
            }    
        default:
            return state;
    }
}
  