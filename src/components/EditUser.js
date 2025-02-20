import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect,useState } from "react"
const EditUser = () =>{
    const [user,setUser] = useState([])
    const [error,setError] = useState(null)
    const navigate = useNavigate()
    const {id} = useParams()
    const getUserApi = "http://localhost:3000/user"

    useEffect(()=>{getUser()},[]);

    const getUser=()=>{
        axios
        .get(getUserApi.concat("/")+id)
        .then((item)=>{setUser(item.data)
        }).catch((err)=>{console.log(err)})
    }

    const handleInput = (e) => {
        e.preventDefault();
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(getUserApi.concat("/")+id ,{
            method:"Put",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error("Network Response was not ok")
            }
            return response.json();
        }).then((data)=>{navigate("/")})
    }


    return(
        <div>
            <p>Edit User Details</p>
            <form onSubmit={handleSubmit}>
            <div>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" value={user.name} onChange={handleInput}/>
            </div>
            <div>
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" value={user.email} onChange={handleInput}/>
            </div>
            <div>
                <label for="phone">Phone: </label>
                <input type="text" name="phone" id="phone]" value={user.phone} onChange={handleInput}/>
            </div>
            <div>
            <button type="submit">Update</button>
            </div>
            </form>
        </div>
    )
    
}

export default EditUser