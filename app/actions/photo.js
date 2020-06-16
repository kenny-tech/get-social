import axios from 'axios';

import { POST_PHOTO, POST_PHOTO_ERROR } from './types';
import { baseurl } from '../../config/config';

export const post_photo = (user_id,user_name,base64_image) => async dispatch => {
    axios.post(baseurl + '/photos', {
        userId: user_id,
        user: user_name,
        base64Image: base64_image,
      })
      .then((response) => {
        dispatch({
            type: POST_PHOTO,
            payload: response.data
        });
      })
      .catch((error) => {
          dispatch({
            type: POST_PHOTO_ERROR,
            payload: error.response.data.message
          });
      })
}
