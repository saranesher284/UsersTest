import React , { useState}from 'react'
import UserForm from '../user-form/UserForm';

const  Table=({users})=> {

    const [selectedUser, setSelectedUser] = useState();

    const setUserData=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
           .then((json) => {
            setSelectedUser(json)
                    })
    }

    const onClickRow=(user)=>{
        setUserData(user.id)
    }

   
  return (
    <div>

    <table>
    {users.map((user)=>{
        return  <tr onClick={()=>onClickRow(user)}>
        <td><b>Name: </b> {user.name}</td>
        <td><b>Website: </b> {user.website}</td>
        <td><b>Email: </b> {user.email}</td>
      </tr>
      })}

  </table>

  {selectedUser&& <div>
   <UserForm user={selectedUser}/>
   </div>}
  </div>
  
  );
}

export default Table;
