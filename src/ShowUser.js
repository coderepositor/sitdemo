import axios from "axios"
import { useEffect, useState } from "react"

const ShowUser = () =>{
const showUserApi = "http://localhost:3000/user"

const [userData,setUserData] = useState([])

useEffect(()=>{
    getUsers()
})
const getUsers =() =>{
    axios.get(showUserApi).then((res)=>{
        setUserData(res.data)
    })
    .catch((err)=>{console.log(err)})
}
if(userData.length<0){
    return <h1>No User Data</h1>
}
else
{
    return (
        <div>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {userData.map((user,i)=>{
                    return(<tr key={i+1}>
                        <td> {user.id} </td>
                        <td> {user.name} </td>
                        <td> {user.email} </td>
                        <td> {user.phone} </td>
                    </tr>)
                })}
            </table>
        </div>
    )
}
}

export default ShowUser