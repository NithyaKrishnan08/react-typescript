// import { useState } from 'react'
// type UserProps = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

interface UserProps {
  name: string;
  age: number;
  isStudent: boolean;
}

function User({name, age, isStudent}: UserProps) {

  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      {isStudent && <h2>User is student</h2>} 
    </>
  )
}

export default User;
