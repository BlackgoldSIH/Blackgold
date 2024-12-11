import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../components/Utils/CustomInput'
import './signup.css'
import { assets } from '../../assets/assets'
import axios from 'axios'

function Signup() {
  const [role, setRole] = useState('Investigator')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    setError(null)
    try {
      console.log('Username:', username)
      console.log('Password:', password)

      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/login/", 
        { 
          username, 
          password 
        }
      )

      console.log('Response:', response)
      const data = response.data
      localStorage.setItem('token', data.token) // Save token to localStorage
      localStorage.setItem('id',data.id)
      // navigate('/home') // Redirect to home
    } catch (error) {
      setError('An error occurred. Please try again later.')
    }
  }

  useEffect(()=>{
    const checkLogin = async () => {
      const sessionId = localStorage.getItem("token");
      if (sessionId) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/accounts/me/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${sessionId}`,
                'Content-Type': 'application/json',
            },
            
        });
        
          if (response.status === 200) {
            console.log('User is authenticated');
            let data = await response.json();
            
            data = data.role
            if(data === 'admin')
            {
              navigate("admin-home");
              
            }
            else if(data==='investigator')
            {
              navigate("invest-home");
              
            }
            else if(data==="review_commitee")
            {
              navigate("review-home");
              
            }
            else
            {
              navigate("research-home");
              
            }
          }
        } catch (error) {
          console.error('Session invalid or expired');

        }
      } else {
        console.log('User is not authenticated');

      }
      
    };
    checkLogin();
  },[])

  return (
    <>
      <div className="container">
        <div className="signup_content">
          <div className="signup_title">
            <img src={assets.logo} alt="Logo" />
          </div>
          <div className="signup_form">
            <form onSubmit={handleLogin}>
              <div className="signup_form_head">
                <h2>Welcome <br />{role}!</h2>
              </div>

              {/* Role Selection */}
              <div className="signup_role_select">
                <label htmlFor="role">Select Your Role</label>
                <select 
                  id="role" 
                  value={role} 
                  onChange={handleRoleChange} 
                  className="role_dropdown"
                >
                  <option value="Investigator">Investigator</option>
                  <option value="Admin">Admin</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Review Committee">Review Committee</option>
                </select>
              </div>

              <div className="signup_form_field">
                <CustomInput 
                  icon={<i className="ri-user-3-line"></i>} 
                  placeholder="Username" 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <CustomInput 
                  icon={<i className="ri-lock-line"></i>} 
                  placeholder="Password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>

              {error && <div className="error_message">{error}</div>}

              <div className="signup_btn">
                <button type="submit">Get In</button>
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
