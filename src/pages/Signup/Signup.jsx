import React from 'react'
import CustomInput from '../../components/Utils/CustomInput'
import './signup.css'
import { assets } from '../../assets/assets'
function Signup() {
  return (
    <>
        <div className="container">
            <div className="signup_content">
                <div className="signup_title">
                    <img src={assets.logo} alt="" />
                </div>
                <div className="signup_form">
                    <form action="">
                        <div className="signup_form_head">
                            <h2>Welcome <br />Investigator!</h2>
                        </div>
                        <div className="signup_form_field">
                            <CustomInput icon={<i class="ri-user-3-line"></i>} placeholder="Username" type="text" />
                            <CustomInput icon={<i className="ri-lock-line"></i>} placeholder="Password" type="password" />
                        </div>
                        <div className="signup_btn">
                            <a href="#">Get In</a>
                        </div>
                        <div className="signup_admin">
                            <p>Not an Investigator? <a href="#">Admin Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
