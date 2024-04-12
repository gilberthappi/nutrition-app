import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function Register(){

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: ""
  });

  function handleInput(event){
   setUserDetails((prevState) => {
       return {...prevState, [event.target.name]: event.target.value};
   })
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(userDetails);
  }

    return(
        <>
        <section className="container">
          <form className="form" onSubmit={handleSubmit}>

            <h1> Start Your Fitness</h1>

            <input className="inp" type="text" onChange={handleInput}
            placeholder="Enter Name" name="name"/>

            <input className="inp" type="email" onChange={handleInput}
            placeholder="Enter Email" name="email"/>

            <input className="inp" type="password" onChange={handleInput}
             placeholder="Enter Password" name="password"/>

            <input className="inp" type="number" onChange={handleInput}
             placeholder="Enter Age" name="age"/>

            <button className="btn">Join</button>

            <p> Already Registered ? <Link to="/login">Login</Link></p>

          </form>
        </section>
        </>
    )
}