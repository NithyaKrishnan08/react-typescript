import {Info} from '../type';

function UserInfo({userId, name, email}: Info) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{userId}</h2>
      <h2>{email}</h2>
    </>
  )
}

export default UserInfo;
