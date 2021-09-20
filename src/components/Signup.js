import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import {
    InputCustom,
    CustomBoxForm,
    CustomMinibox,
    ButtonCustom,
  } from "../styles/Login";

import { Link } from 'react-router-dom';
const Swal = require('sweetalert2')


const Signup = ({ history }) => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            history.push('/dashboard')
        }
    },[])

    const onSignup = () => {
        setLoading(true);
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => history.push('/'))
                    .catch((e) => alert(e.message))
            }).catch(e => Swal.fire({
                title: 'Error!',
                text: `${e.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
              }))
            .finally(() => setLoading(false))
    }

    const HandlerInput = (e) => {
        return e.target.value;
      };

    return (
        <div>
            <CustomBoxForm className="w-96 bg-white shadow-lg">
                <h2>Register</h2>
                <div className="m-5">
                    <label className="block text-xl font-bold mb-2">Name</label>
                    <InputCustom
                        value={name}
                        onChange={e => setName(HandlerInput(e))}
                        name="name"
                        type="name"
                    />
                </div>
                <div className="m-5">
                    <label className="block text-xl font-bold mb-2">Email</label>
                    <InputCustom
                        value={email}
                        onChange={e => setEmail(HandlerInput(e))}
                        name="email"
                        type="email"
                    />
                </div>
                <div className="m-5">
                    <label className="block text-xl font-bold mb-2">Password</label>
                    <InputCustom
                        value={password}
                        onChange={e => setPassword(HandlerInput(e))}
                        name="password"
                        type="password"
                    />
                </div>
                <div className="field is-grouped is-grouped-centered">
                    <ButtonCustom onClick={onSignup}>
                        { loading ? <button class="button is-loading">Loading</button> : 'Signup'}
                    </ButtonCustom>
                </div>
                <div className="SignUp m-5">
                    <Link to="/">
                        Already have an account?
                    </Link>
                </div>
            </CustomBoxForm>
        </div>
    )
}

export default Signup;
