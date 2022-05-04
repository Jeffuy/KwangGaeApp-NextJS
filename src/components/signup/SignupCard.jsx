import React, { useContext } from "react";
import libraryFunctions from 'scripts/libreryFunctions'

const SignupCard = () => {

    return (
        <>
            <div>
                <label htmlFor="username"> Username</label>
                <input type="text" id="username"/>
                <br />
                <label htmlFor="mail"> Mail</label>
                <input type="mail" id="mail"/>
                <br />
                {/* <label htmlFor=""> Foto</label>
                <input type="text" /> */}
                {/* <br /> */}
                <label htmlFor="password"> Password</label>
                <input type="password" id="password"/>
                <br />
                <label htmlFor="confirmPassword"> Confirm password</label>
                <input type="password" id="confirmPassword"/>
                <br />

                <button onClick={ () => {
                    let username = document.getElementById('username').value
                    let mail = document.getElementById('mail').value
                    let password = document.getElementById('password').value
                    let confirmPassword = document.getElementById('confirmPassword').value
                    
                    libraryFunctions.createUser(username,'',mail,password,confirmPassword)

                }}>Signup</button>
            </div>
        </>
    );
};

export default SignupCard;
