import axios from 'axios';
import { getAllUsers, addUser, updateUser, deleteUser } from './userSlice';

// get / read
export const fetchUsers = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch(getAllUsers(res.data));
    })
    .catch(err => console.log(err));
};

// add / create
export const newUser = body => dispatch => {
  dispatch(addUser(body));
};

// remove / delete
export const removeUser = id => dispatch => {
  dispatch(deleteUser(id));
};

// update
export const modifyUser = body => dispatch => {
  dispatch(updateUser(body));
};
