import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import {
  InputCustom,
  CustomBoxForm,
  CustomMinibox,
  ButtonCustom,
} from "../styles/Login";

import { LogoMain } from "../assets/Export";

const Login = ({ history }) => {
  const Swal = require("sweetalert2");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /*Un token de acceso es un string aleatorio que identifica a un usuario y 
        puede ser utilizado por la aplicación para realizar llamadas API*/
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/dashboard");
    }
  }, []);

  const onLogin = () => {
    setLoading(true);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("token", userCredential._tokenResponse.idToken);
        history.push("/dashboard");
      })
      .catch((e) =>
        Swal.fire({
          title: "Error!",
          text: `${e.message}`,
          icon: "error",
          confirmButtonText: "Ok",
        })
      )
      .finally(() => setLoading(false));
  };

  const HandlerInput = (e) => {
    return e.target.value;
  };

  return (
    <div>
      <CustomBoxForm className="w-96 bg-white shadow-lg">
        <div className="m-5">
          <CustomMinibox>
            <div>
              <img src={LogoMain} alt="Logo" />
              <span>Proyect Atlas</span>
            </div>
            <p>Sign in</p>
            <span>Hi! there! Nice to see you again</span>
          </CustomMinibox>

          <label className="block text-xl font-bold mb-2">Email</label>
          <InputCustom
            value={email}
            onChange={(e) => setEmail(HandlerInput(e))}
            name="email"
            type="email"
            placeholder="Example@gmail.com"
          />
        </div>

        <div className="m-5">
          <label className="block text-xl font-bold mb-2">Password</label>
          <InputCustom
            value={password}
            onChange={(e) => setPassword(HandlerInput(e))}
            name="password"
            type="password"
            placeholder="*******"
          />
        </div>

        <div className="field is-grouped is-grouped-centered">
          
            <ButtonCustom onClick={onLogin}>
              {loading ? <button class="button is-loading">Loading</button> : "Sign in"}
            </ButtonCustom>
        
        </div>

        <div className="SignUp m-5">
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </CustomBoxForm>
    </div>
  );
};

export default Login;
