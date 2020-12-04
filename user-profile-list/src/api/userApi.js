import axios from 'axios';

export const fetchUsers = async userId => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');

    return users.data;
  } catch (error) {
    console.log('users error: ', error.response);
  }
};

export const fetchUserProfile = async userId => {
  try {
    const profile = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    return profile.data;
  } catch (error) {
    console.log('user profile error: ', error.response);
  }
};
