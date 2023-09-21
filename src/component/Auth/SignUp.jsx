import { useState } from "react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom"

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    // <div className="container ">
    //   <form onSubmit={signUp}>
    //     <h1>Create an Account</h1>
    //     <input
    //       type="email"
    //       placeholder="Enter your email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Enter your password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Sign UP</button>
    //   </form>
    // </div>

    // import React from 'react';


// function App() {
//   return (
    <MDBContainer fluid >

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody onSubmit={signUp}>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <Link to="/">
            <h2>The Imaginarium Gallery</h2>
          </Link>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text'  className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' 
                 value={email}
           onChange={(e) => setEmail(e.target.value)} id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={password}
          onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

// export default App;
//   );
// };

export default SignUp;
