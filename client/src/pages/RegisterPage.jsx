import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Register.scss";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  console.log(formData);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };
  const [passwordMatch, setPasswordMatch] = useState(true)

  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "")
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const register_form = new FormData()

      for (var key in formData) {
        register_form.append(key, formData[key])
      }

      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: register_form
      })

      if (response.ok) {
        navigate("/login")
      }
    } catch (err) {
      console.log("Registration failed", err.message)
    }
  }

  
  return (
    <div className='register'>
        <div className='register_content'>
            <form className='register_content_form' onSubmit={handleSubmit}>
                <input placeholder='First Name' required value={formData.firstName} onChange={handleChange} name='firstName' />
                <input placeholder='Last Name' required value={formData.lastName} onChange={handleChange}  name='lastName' />
                <input placeholder='Email' required name='email' value={formData.email} onChange={handleChange}  type='email' />
                <input placeholder='Password' required name='password' value={formData.password} onChange={handleChange}  type='password' />
                <input placeholder='Confirm Password' required name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}  type='password' />
                
                {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords are not matched!</p>
          )}
                <input id="image" type='file' name='profileImage' accept='image/' onChange={handleChange} style={{display:"none"}} />
                <label htmlFor='image'>
                    <img src='/assets/addImage.png' alt='add profile photo'/>
                    <p>Upload Your Photo</p>
                </label>
                {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}
                <button type='submit' disabled={!passwordMatch}> REGISTER</button>
            </form>
            <a href='/login'>Already have an acoount? Log In Here</a>
        </div>
      
    </div>
  )
}

export default RegisterPage
