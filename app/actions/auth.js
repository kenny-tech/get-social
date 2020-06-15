import axios from 'axios';

import { SIGNUP, SIGNUP_ERROR, SIGNIN, SIGNIN_ERROR } from './types';

import { baseurl } from '../../config/config';

export const signup = (email,password,name) => async dispatch => {
    axios.post(baseurl + '/signup', {
        email: email,
        password: password,
        name: name,
      })
      .then((response) => {
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

export const signin = (email,password) => async dispatch => {
  axios.post(baseurl + '/signin', {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log('User data: ',response.data);
      dispatch({
          type: SIGNIN,
          payload: response.data
      });
    })
    .catch((error) => {
        console.log(error.response.data.message)
        dispatch({
          type: SIGNIN_ERROR,
          payload: error.response.data.message
        });
    })
}