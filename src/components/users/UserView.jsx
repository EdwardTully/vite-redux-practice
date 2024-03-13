import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from './userSlice'

function UserView() {

    const dispatch = useDispatch()

    const handleSubmit=()=>{
       dispatch(getUsers())
    }
    const usersList = useSelector((state)=>state.users)

  return (
    <div>
        <button type='submit' onClick={()=>handleSubmit()}>Get Users From Server</button>

        <ul>
            {usersList.users.map((ea)=>(<li>{ea.name}</li>))}
        </ul>
    </div>
  )
}

export default UserView