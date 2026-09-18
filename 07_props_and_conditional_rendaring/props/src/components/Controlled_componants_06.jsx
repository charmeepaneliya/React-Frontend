import {useState} from 'react'

const Controlled_components_06 =() =>{
    const [input,setInput] = useState({
        name:"",
        email:"",
        password:"",
    });

    const [user,setUser] = useState([]);

    const handleChage =(field,e)=>{
        setInput((prev)=>{
            return{
                ...prev,[field]:e.target.value,
            }
        })
    }
    console.log("input",input);

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(!input.name || !input.email || !input.password){
            alert("all field are required");
        }else{
            setUser((prev)=>[...prev,input]);
        }
    }

    console.log("user list",user);
   return (
    <>
        <form onSubmit={handleSubmit}>
            <input type='text' value={input.name} onChange={(e)=>handleChage("name",e)} placeholder='Enter name'/>
            <br/><br/>
            <input type='email' value={input.email} onChange={(e)=>handleChage("email",e)} placeholder='Enter email'/>
            <br/><br/>
            <input type='password' value={input.password} onChange={(e)=>handleChage("password",e)} placeholder='Enter password'/>
            <br/><br/>
            <button type='submit'>submit</button>

        </form>
    </>
   )
}

export default Controlled_components_06;