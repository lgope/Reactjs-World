import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uid } from 'uuid';
import { selectUsers } from './userSlice';
import { fetchUsers, modifyUser, newUser, removeUser } from './userActions';

// styles
import styles from './User.module.css';

export function User() {
  const user = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [updateUser, setUpdateUser] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //   add new user on cliek
  const handleClick = e => {
    e.preventDefault();
    dispatch(newUser({ id: uid(), name: input }));
    setInput('');
  };

  //   open update input field on click
  const onUpdateBtnClick = (e, user) => {
    e.preventDefault();
    setName(user.name);
    setUpdateUser(user);
    setIsOpen(true);
  };

  // update name on click
  const onBtnClick = (e, id) => {
    e.preventDefault();
    dispatch(modifyUser({ id, name }));
    setName('');
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.userPage}>
      {/* add new user and user lists */}
      <div>
        <input
          aria-label='Set increment amount'
          value={input}
          placeholder='Name'
          onChange={e => setInput(e.target.value)}
        />{' '}
        <button disabled={!input.trim()} onClick={handleClick}>
          Add Name
        </button>
        {/* loading until user fetched */}
        <h1>{user.isLoading ? 'Loading...' : user.name}</h1>
        {/* all users list */}
        {user.allUsers
          ? user.allUsers.map(user => (
              <div key={user.id}>
                <p>
                  {user.name}
                  {'   '}
                  <button onClick={() => dispatch(removeUser(user.id))}>
                    Delete
                  </button>{' '}
                  <button onClick={e => onUpdateBtnClick(e, user)}>
                    Update
                  </button>
                  {'   '}
                </p>
              </div>
            ))
          : null}
        {/* if no user */}
        {!user.isLoading && user.allUsers.length <= 0 && (
          <p>No one left 😟 Don't worry reload 🔃🙂</p>
        )}
      </div>

      {/* update input field */}
      <div className={styles.updateField}>
        {isOpen && (
          <>
            <input
              aria-label='Update Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />{' '}
            <button
              disabled={!name.trim()}
              onClick={e => onBtnClick(e, updateUser.id)}
            >
              Click
            </button>
          </>
        )}
      </div>
    </div>
  );
}
