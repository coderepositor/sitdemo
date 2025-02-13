import { useState } from "react"
const CreateUser = () =>{
    const createUserApi = "http://localhost:3000/user"
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:""
    })
    const [error,setError] = useState(null)
    const handleInput = (event) =>{
        event.preventDefault()
        const {name,value} = event.target;
        //console.log(name,value)
        setUser({...user,[name]:value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log(user)
        try{
            const response = await fetch(createUserApi,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(user),
            })
            if(response.ok){
                alert("User Created Successfully")
                setUser({name:"",email:"",phone:""})
            } else{
                alert("Error in Form")
            }
        } catch(error){
            console.log(error.message)
            setError(error.message)
        }
   }

    return(
        <div>
            <h2>
                <p> User Registration Form </p>
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleInput}/>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleInput}/>
                </div>
                <div>
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value={user.phone} onChange={handleInput}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default CreateUser