import { useContext, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../AuthContext";

import "./Signup.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState("");

  const { signUpHandler , logInHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUpHandler(email, password);
      logInHandler(email, password)
      setConfirm("تم التسجيل ");
      navigate("/");
      setInterval(() => {
        setConfirm("");
      }, 3000);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 3000);
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

        {confirm && <div className="confirm">{confirm} </div>}

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
