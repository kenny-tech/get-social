import axios from 'axios';

import { SIGNUP, SIGNUP_ERROR } from './types';

import { baseurl } from '../../config/config';

export const signup = (email,password,name) => async dispatch => {
    axios.post(baseurl + '/signup', {
        email: email,
        password: password,
        name: name,
      })
      .then((response) => {
        // console.log(response);
        dispatch({
            type: SIGNUP,
            payload: response.data
        });
      })
      .catch((error) => {
          dispatch({
            type: SIGNUP_ERROR,
            payload: error.response.data.message
          });
      })
}