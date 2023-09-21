import { useState } from "react";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, redirect, useNavigate } from "react-router-dom";
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
  MDBCheckbox,
} from "mdb-react-ui-kit";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("success");
        console.log(userCredential);
        navigate("/gallery");
      })
      .catch((error) => {
        toast.error("invalid credential");
        console.log(error);
      });
  };
  return (
    <section className=" signin d-flex pt-5 ">
      <div className="container d-flex justify-content-center  ">
        <form onSubmit={signIn}>
          <Link to="/">
            <h2>The Imaginarium Gallery</h2>
          </Link>
          <h6 className="pt-3 d-flex justify-content-center">
            Login into your account
          </h6>
          <div className="signin-body">
            <p>
              Email address <br />{" "}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
          </div>
          <br />
          <div className="signin-body">
            <p>
              Password <br />{" "}
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
    // <MDBContainer  >

    //   <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
    //     <MDBCardBody onSubmit={signIn}>
    //       <MDBRow>
    //         <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    //         <Link to="/">
    //         <h2>The Imaginarium Gallery</h2>
    //       </Link>
    //           <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome! Login to your account</p>

    //           <div className="d-flex flex-row align-items-center mb-4">
    //             <MDBIcon fas icon="envelope me-3" size='lg'/>
    //             <MDBInput label='Enter your email'  id='form2' type='email' value={email}
    //              onChange={(e) => setEmail(e.target.value)}/>
    //           </div>

    //           <div className="d-flex flex-row align-items-center mb-4">
    //             <MDBIcon fas icon="lock me-3" size='lg'/>
    //             <MDBInput label='Password' id='form3' type='password' value={password}
    //             onChange={(e) => setPassword(e.target.value)}/>
    //           </div>

    //           <MDBBtn className='mb-4' size='lg' type="submit">Login</MDBBtn>

    //         </MDBCol>

    //         <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
    //           <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
    //         </MDBCol>

    //       </MDBRow>
    //     </MDBCardBody>
    //   </MDBCard>

    // </MDBContainer>
  );
};

export default SignIn;
