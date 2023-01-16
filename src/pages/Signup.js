import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../AuthContext";

import "./Signup.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const { signUpHandler } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUpHandler(email, password);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <section className="signup">
      <form onSubmit={handleSubmit}>
        <h2> صفحة التسجيل </h2>

        <div className="logo">
          <img src={logo} alt="logo_img" />
        </div>

        {error && (
          <div className="alert">
            <p>خطأ في ادخال المعطيات </p>
            <p>أعد المحاولة</p>
          </div>
        )}

        <div className="text-area">
          <p>البريد الالكتروني </p>
          <input
            type="text"
            placeholder=" أدخل الايميل"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-area">
          <p>كلمة السر</p>
          <input
            type="password"
            placeholder="أدخل كلمة السر"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* <div className="text-area">
          <p> تأكيد كلمة السر </p>
          <input
            type="password"
            placeholder="أعد ادخال كلمة السر"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div> */}

        <div className="question">
          <Link to="/">
            <p> لديك حساب؟ </p>
          </Link>
        </div>
        <div type="submit" className="btn" onClick={handleSubmit}>
          <p>تسجيل</p>
        </div>
      </form>
    </section>
  );
};

export default Signup;
