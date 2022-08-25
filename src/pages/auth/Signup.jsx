import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import show from '../../props/icons/View_alt_fill.svg';
import hide from '../../props/icons/hide.svg';
import google from "../../props/icons/logo_googleg_48dp.svg";
import facebook from '../../props/icons/Facebook_logo.svg';
import twitter from "../../props/icons/icons8-twitter.svg";
import './auth.scss';
import axios, { setToken } from '../../util';
import { useDispatch } from 'react-redux';
import { useNavigate} from "react-router";


function Signup() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [uname, setUname] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [rgPassword, setRgPassword] = useState(true);
    const [error, setErrors]= useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pwordExp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/);


    const handleSubmit = (e) => {
      e.preventDefault();
      e.target.disabled = true;
      load(true);
      const errors = {};
      if(name.length === 0){
        errors.name = "Please input your name";
      }
      if(uname.length < 3){
        errors.uname = "username must be minimum 3 letters";
      }
      console.log(errors)
      if (Object.keys(errors).length !== 0) {
        load(false);
        e.target.disabled = false;
        setErrors(errors);
      } else {
        setErrors(null);
        try {
          async function signUser() {
            const {data} = await axios({
              method: "POST",
              url: "/auth/signup",
              data: {
                fullname: name,
                username: uname,
                email: email,
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
    }
    const handleName = (e) => {
      setName(e.target.value);
    };
    const handleUname = (e) => {
      setUname(e.target.value);
    };
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setRgPassword(pwordExp.test(password));
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
      e.target.parentNode.style.borderColor = "#04c270";
    };
    
    const handleFocusOut = (e) => {
      e.target.parentNode.style.borderColor = "#707070";
    };
    const load = (bool) => {
      setLoading(bool);
    };
    return (
      <div className="Signup">
        <div className="Signup__form">
          <h3 className="Signup__form__heading">
            Create Your Kapitify Account
          </h3>
          <p className="Signup__form__subtitle">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <p className="Signup__form__label">Username</p>
            <div className="Signup__form__input">
              <input
                type="text"
                name="username"
                value={uname}
                onFocus={handleFocus}
                onBlur={handleFocusOut}
                onChange={handleUname}
                required
              />
            </div>
            <p className="error">{error?.uname}</p>
            <p className="Signup__form__label">Email Address</p>
            <div className="Signup__form__input">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                onFocus={handleFocus}
                onBlur={handleFocusOut}
                required
              />
            </div>

            <p className="Signup__form__label">Full Name</p>
            <div className="Signup__form__input">
              <input
                type="text"
                name="name"
                value={name}
                onFocus={handleFocus}
                onBlur={handleFocusOut}
                onChange={handleName}
                required
              />
            </div>
            <p className="error">{error?.name}</p>

            <p className="Signup__form__label">Password</p>
            <div className="Signup__form__input">
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
              <img
                src={hidePassword ? show : hide}
                onClick={handleView}
                alt=""
              />
            </div>
            {rgPassword ? (
              ""
            ) : (
              <p className="error">
                 Minimum of 8 characters.<br/>
                Password must contain an uppercase letter, a lowercase letter, a
                number, and a symbol.
              </p>
            )}
            <div className="Signup__form__radio">
              <div>
                {/* <input type="checkbox" name='T&C' required/>
                <span className='custom-check'></span> */}
                <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              </div>
              <p>
                I accept the <Link to="/terms-of-use">Terms & Conditions</Link>
              </p>
            </div>
            <button type="submit" className="Signup__form__submit">
              {loading ? <div className='spin'></div> :"Create Account"}
            </button>
          </form>

          <div className="Signup__form__break">
            <hr />
            <p>Or continue with</p>
            <hr />
          </div>
          <div className="Signup__form__SM">
            <img src={google} alt="Signup with Google" />
            <img src={twitter} alt="Signup with Twitter" />
            <img src={facebook} alt="Signup with Facebook" />
          </div>
        </div>
      </div>
    );
}

export default Signup;
