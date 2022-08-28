import Header from './components/header/Header';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Swap from './pages/swap/Swap';
import Chat from './pages/chat/chat';
import Profile from './pages/profile/Profile';
import Faq from './pages/faqs/Faq';
import ProductPage from './pages/productpage/ProductPage';
import TermsOfUse from './pages/privacy/Terms-of-use';
import Cookie from'./pages/privacy/cookie_policy';
import Privacy from './pages/privacy/Privacy';
import UpdateUsername from './pages/formInput/updateUsername';
import ChangeEmail from './pages/formInput/changeEmail';
import ChangePhoneNumber from './pages/formInput/changePhoneNumber';
import UpdateLocation from './pages/formInput/update_location';
import UpdateName from './pages/formInput/update_name';
import ChangeLoginPassword from './pages/formInput/changeLoginPassword';
import SearchPage from './pages/searchpage/SearchPage';
import ForgotPassword from './pages/forgotpassword/forgotPassword';
import NewPassword from './pages/forgotpassword/newPassword';
import About from './pages/about/about';
import Setting from './pages/setting/setting';
import Details from './pages/personalDetails/PersonalDetails';
import Contact from './pages/contact/Contact';
import ConnectSwappers from './pages/connectSwappers/ConnectSwappers';
import AccountSetting from './pages/accountSettings/AccountSettings';
import KYC from './pages/privacy/Kyc';
import CustomerSupport from './pages/customerSupport/CustomerSupport';
import SortSwaps from './pages/sortSwaps/SortSwaps';
import Blog from './pages/blog/Blog';
import NoMsg from './pages/chat/NoMsg';
import Location from './components/location/Location';
import Waitlist from './pages/waitlist/Waitlist';
import WaitlistHome from './pages/waitlist/waitlistHome';
//import NewMenu from './components/NewMenu/NewMenu';
import HowItWorks from './pages/howItWorks/HowItWorks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { token } from './util';
import axios from "./util";



function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    if(token){
      try {
        
        signUser();
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [signUser]);
// eslint-disable-next-line react-hooks/exhaustive-deps
async function signUser() {
          const { data } = await axios({
            method: "GET",
            url: "/auth/getuser",
            headers: {
              "x-auth-token": token,
              "Content-Type": "application/json",
            },
          });

          console.log(data);
          dispatch({
            type: "login_USER",
            user: data.user,
          });
          dispatch({
            type: "authenticated",
          });
        }
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={[< Waitlist/>]}/> */}
          {/* <Route path="new-menu" element={[<NewMenu/>]}/> */}
          
          {/* <Route path="/:referral" element={[< Waitlist/>]}/> */}
          <Route path="/" element={[<WaitlistHome />]}/> 
           <Route path="product/iphone-xr" element={[<ProductPage />]}/>
          <Route path="register" element={[<Header />, <Signup />]} />
          <Route path="login" element={[<Header />, <Login />]} />
          <Route path="chat" element={<Chat />}/> 
          <Route path="profile" element={<Profile mine/>}/>
          <Route path="faq" element={<Faq/>}/>
          <Route path="privacy-policy" element={<Privacy/>}/>
          <Route path="terms-of-use" element={<TermsOfUse/>}/>
          <Route path="cookie-policy" element={<Cookie/>}/>
          <Route path="update-username" element ={<UpdateUsername/>}/>
          <Route path="change-email" element ={<ChangeEmail/>}/>
          <Route path="change-phonenumber" element ={<ChangePhoneNumber/>}/>
          <Route path='update-location' element ={<UpdateLocation/>}/>
          <Route path='update-name' element ={<UpdateName/>}/>
          <Route path="swapper/@:username" element={<Profile />}/>
          <Route path="search" element={<SearchPage/>}/>
          <Route path= "forgot-password" element={<ForgotPassword />} />
          <Route path ="new-password" element ={<NewPassword/>}/>
          <Route path="about" element={<About/>}/>
          <Route path ="change-login-password" element={<ChangeLoginPassword/>}/>
          <Route path ="settings" element={<Setting/>}/>
          <Route path ="personal-details" element={<Details/>}/>
          <Route path ="contact" element={<Contact/>}/>
          <Route path ="connect" element={<ConnectSwappers/>}/>
          <Route path="account-setting" element={<AccountSetting/>}/>
          <Route path="kyc" element={<KYC/>}/>
          <Route path="customer-support" element={<CustomerSupport/>}/>
          <Route path="sort-swaps" element={<SortSwaps/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="no-msg" element={<NoMsg/>}/>
          <Route path="location" element={<Location/>}/>
          <Route path="how-it-works" element={<HowItWorks/>}/>
          <Route path="waitlist-home" element={<WaitlistHome />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
