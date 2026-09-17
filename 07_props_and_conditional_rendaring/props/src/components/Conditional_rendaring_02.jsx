import {useState} from 'react';

const Conditional_rendaring_02 = () =>{
    const [login,setLogin] = useState(false);
    const [user,setUser] = useState(false);

    const handleClick = () =>{
        setLogin(!login);
    }

    return(
        <>
            <h1>{login ? "welcome" : "click to login"}</h1>
            <button onClick={handleClick}>
                {login ? "login" : "logout"}
            </button>

            <h2>{user && "welcome"}</h2>
        </>
    )
}

export default Conditional_rendaring_02;