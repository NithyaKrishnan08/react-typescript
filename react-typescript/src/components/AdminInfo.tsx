import {AdminInfoList} from '../type';

function AdminInfo({userId, name, email, role, department, isActive}: AdminInfoList) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{userId}</h2>
      <h2>{email}</h2>
      <h2>{role}</h2>
      <h2>{department}</h2>
      {isActive && <h2>The user is active admin</h2>}
    </>
  )
}

export default AdminInfo;