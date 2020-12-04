import { Suspense, useState, useEffect } from 'react';

import { fetchUserProfile } from '../api/userApi';

const SuspensefulUserProfile = ({ userId }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetchUserProfile(userId).then(profile => setData(profile));
    };

    fetchData();
  }, [userId]);

  return (
    <Suspense>
      <UserProfile data={data} />
    </Suspense>
  );
};

const UserProfile = ({ data }) => (
  <>
    <h1>{data.name}</h1>
    <h2>{data.email}</h2>
  </>
);

const UserProfileList = () => {
  // Assume user id getting from elsewhere.
  const userIds = [1, 2, 3];
  return (
    <>
      {userIds.map(el => (
        <SuspensefulUserProfile key={el} userId={el} />
      ))}
    </>
  );
};

export default UserProfileList;
