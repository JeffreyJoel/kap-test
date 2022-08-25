import React, { useState } from 'react';
import show from "../../props/icons/View_alt_fill.svg";
import hide from "../../props/icons/hide.svg";
import google from "../../props/icons/logo_googleg_48dp.svg";
import facebook from "../../props/icons/Facebook_logo.svg";
import twitter from "../../props/icons/icons8-twitter.svg";
import './login.scss';
import { Link } from 'react-router-dom';
import { setToken } from '../../util';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from '../../util';

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleName = (e) => {
      setName(e.target.value);
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

    const handleView = () => {
      setHidePassword(!hidePassword);
      var x = document.getElementById("myPassword");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    };

    const handleFocus = (e) => {
     // e.target.parentNode.style.borderColor = "#57CC99";
     e.target.parentNode.style.borderColor = "#04c270";
    }
    const handleFocusOut = (e) => {
      e.target.parentNode.style.borderColor = "#707070";
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    
      load();
      try {
        async function signUser() {
          const {data} = await axios({
            method: "POST",
            url: "/auth/login",
            data: {
              
              email: name,
              password: password,
            },
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(data);
          setToken({ token: data.token, id: data.user.kp_uid});
          dispatch({
            type: "login_USER",
            user: data.user,
          });
          dispatch({
            type: "authenticated"
          });
          navigate("/")
        }
        signUser();
      } catch (err) {
          load();
          console.log(err);
        }
    }
    const load = ()=>{
      setLoading(!loading);
    };
    

    return (
      <div className="Login">
        <div className="Login__form">
          <h3 className="Login__form__heading">Log In To Kapitify</h3>
          <p className="Login__form__subtitle">
            Don't have an account? <Link to="/register">Create one for free</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <p className="Login__form__label">Username or Email Address</p>
            <div className="Login__form__input">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                onFocus={handleFocus}
                onBlur={handleFocusOut}
                required
              />
            </div>
            <p className="Login__form__label">Password</p>
            <div className="Login__form__input">
              <input
                type="password"
                name="Password"
                value={password}
                onChange={handlePassword}
                onFocus={handleFocus}
                onBlur={handleFocusOut}
                id="myPassword"
                required
              />
              <img src={ hidePassword ? show : hide} alt="eye" onClick={handleView} />
            </div>
            <p className="Login__form__FP">
              <Link to="/forgot-password">Forgot Password</Link>
            </p>
            <button type="submit" className="Login__form__submit" onSubmit={load}>
            {loading ? <div className='spin'></div> :"Log In"}
            </button>
          </form>
          <div className="Login__form__break">
            <hr />
            <p>Or continue with</p>
            <hr />
          </div>
          <div className="Login__form__SM">
            <img src={google} alt="Login with Google" />
            <img src={twitter} alt="Login with Twitter" />
            <img src={facebook} alt="Login with Facebook" />
          </div>
        </div>
      </div>
    );
}

export default Login;
