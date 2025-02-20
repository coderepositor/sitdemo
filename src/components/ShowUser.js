import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const ShowUser = () => {
    const showUserApi = "http://localhost:3000/user"
    const [userData,setUserData] = useState([])

    const handleDelete = async (id) =>{
        try {
            const response = await fetch(showUserApi.concat("/")+id,{method:"DELETE"})
            if (!response.ok){
                throw new Error ("Failed to Delete the user")
            }
            setUserData(userData.filter((item)=>item.id!== id))
        }catch (error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = () =>{
        axios.get(showUserApi).then((res)=>{
            setUserData(res.data)
        })
        .catch((err)=>{console.log(err)})
    }

    if (userData.length<0){
        return <h1>No User Found</h1>
    }
    else{
       return( <div>
        <Link to={`/create-user/`}>
                            Create User
                            </Link>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                {userData?.map((user,i)=>{
                    return (<tr key={i+1}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Link to={`/edit-user/${user.id}`}>
                            Edit User
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="" onClick={()=>handleDelete(user.id)}>Delete User</a>
                        </td>
                    </tr>)
                })}
            </table>
        </div>)
    }
}

export default ShowUser