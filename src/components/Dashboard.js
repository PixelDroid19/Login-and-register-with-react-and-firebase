import { getAuth, signOut } from "@firebase/auth";
import React, { useEffect } from "react";

import {
  InputCustom,
  CustomBoxForm,
  CustomMinibox,
  ButtonCustom,
} from "../styles/Login";

const Dashboard = ({ history }) => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  }, []);

  const auth = getAuth();
  const user = auth.currentUser;

  const verification = () =>{
    if(user === true){
        return 'Verificado'
    }else{
      return 'Sin verificación'
    }
  }
  
  return (
    <div>
      <CustomBoxForm>
        <div className="m-5">
          <p><b>Nombre:</b> {user && user.displayName}</p>
          <p><b>Correo:</b> {user && user.email}</p>
          <p><b>Verificación:</b> {verification()}</p>
        </div>
        <div className="m-5">
          <ButtonCustom onClick={logout}>Logout</ButtonCustom>
        </div>
      </CustomBoxForm>
    </div>
  );
};

export default Dashboard;
