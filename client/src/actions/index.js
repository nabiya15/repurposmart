// this action creator makes ajax request to our backend, which in turn responds with an User object if the user is logged in

// whenever action creator is called it will return a function. Redux thunk sees that we are returning a function it automatically call it with a dispatch. we then make our request and wait for response from the api. we dispatch our action only when we have a response back from our api

import axios from 'axios';
import { GET_USER } from './types';

export const getUser = () => async dispatch => {
 const res= await axios.get('/api/currentUser');
 dispatch({ type: GET_USER, payload: res.data });
};
