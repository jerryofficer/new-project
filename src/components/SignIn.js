import  { useState } from "react";
import "./Sign.css";
import Footer from "./Footer";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    const { username, email, password, confirmPassword } = formData;

    if (!username) newErrors.username = "Username is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords must match";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage("");
    } else {
      setErrors({});
      alert("Sign In Successful!"); 
      setMessage("Sign In Successful!"); 
    }
  };


  return (
    <>
      <div className="signup">
        <form className="wrapper" onSubmit={handleSubmit}>
          <div className="signup_box">
            <div className="signup-header">
              <span>Sign Up</span>
            </div>
            {/* Username Field */}
            <div className="input_box">
              <input
                type="text"
                id="username"
                className="input-field"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="username" className="label">
                Username
              </label>
              <i className="bx bx-user icon" />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            {/* Email Field */}
            <div className="input_box">
              <input
                type="email"
                id="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="label">
                Email
              </label>
              <i className="bx bx-envelope icon" />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            {/* Password Field */}
            <div className="input_box">
              <input
                type="password"
                id="password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password" className="label">
                Password
              </label>
              <i className="bx bx-lock-alt icon" />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            {/* Confirm Password Field */}
            <div className="input_box">
              <input
                type="password"
                id="confirmPassword"
                className="input-field"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label htmlFor="confirmPassword" className="label">
                Confirm Password
              </label>
              <i className="bx bx-lock-alt icon" />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            {/* Terms and Conditions */}
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I agree to the Terms and Conditions</label>
              </div>
            </div>
            {/* Submit Button */}
            <div className="input_box">
              <input type="submit" className="input-submit" value="Sign Up" />
            </div>
            {/* Success or Error Message */}
            {message && <p className="success">{message}</p>}
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignIn;
