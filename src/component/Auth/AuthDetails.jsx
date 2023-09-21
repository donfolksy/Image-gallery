import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
// import { listen } from "express/lib/application";
const AuthDetails = () => {
  const [authuser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authuser ? (
        <>
          {" "}
          {/* <p>{`Signed in as ${authuser.email}`} </p> <button onClick={(userSignOut)}>Sign Out</button> */}
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AuthDetails;
