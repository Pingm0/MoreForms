import React,{useState} from 'react'
import './MyForm.css'

const MyForm = (props) => {
    const [fName,setFname] = useState("");
    const [lName,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cPassword,setCpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {fName,lName,email,password,cPassword}

        console.log(newUser)
    }

    const inputHandler = (e,seter) => {
        seter(e.target.value)
    }

    return (
            <div className='wrapper'>
                <form onSubmit={createUser}>
                    <div>
                        <div className='top'>
                            <label className='col1 myLable' > First Name</label>
                            <input className='col3 myInput' type={"text"} onChange={ (e) => inputHandler(e,setFname)}></input>
                        </div>
                        { fName.length < 2 && fName.length > 0 ? <p>First Name must be at least 2 characters</p> : null  }
                    </div>
                    <div>
                        <div className='top'>
                            <label className='col1 myLable' > Last Name</label>
                            <input className='col3 myInput' type={"text"} onChange={ (e) => inputHandler(e,setLname)}></input>
                        </div>
                        { lName.length < 2 && lName.length > 0 ? <p>Last Name must be at least 2 characters</p> : null  }
                    </div>
                    <div>
                        <div className='top'>
                            <label className='col1 myLable' > Email</label>
                            <input className='col3 myInput' type={"email"} onChange={ (e) => inputHandler(e,setEmail)}></input>
                        </div>
                        { email.length < 2 && email.length > 0 ? <p>email must be at least 2 characters</p> : null  }
                        
                    </div>
                    <div>
                        <div className='top'>
                            <label className='col1 myLable' > Password</label>
                            <input className='col3 myInput' type={"password"} onChange={ (e) => inputHandler(e,setPassword)}></input>
                        </div>
                        { password.length < 8 && password.length > 0 ? <p>Password must be at least 8 characters</p> : null  }
                    </div>
                    <div>
                        <div className='top'>
                            <label className='col1 myLable' > Confirm Password</label>
                            <input className='col3 myInput' type={"password"} onChange={ (e) => inputHandler(e,setCpassword)}></input>
                        </div>
                        { password !== cPassword && cPassword.length > 0?  <p>Password Must Match</p> : null   }
                    </div>
                </form>
        </div>
    )
}

export default MyForm;