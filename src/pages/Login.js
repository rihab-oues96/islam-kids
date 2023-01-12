import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Login.scss";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <section className="login">
      <form>
        <div className="logo">
          <img src={logo} alt="logo_img" />
        </div>
        <div className="text-area">
          <p>ايميل المستخدم</p>
          <input
            type="text"
            placeholder=" أدخل الايميل"
            required
            ref={emailRef}
          />
        </div>
        <div className="text-area">
          <p>كلمة السر</p>
          <input
            type="password"
            placeholder="أدخل كلمة السر"
            ref={passwordRef}
          />
        </div>
        <div className="question">
          <p>نسيت كلمة السر؟</p>
          <Link to="register">
            <p>سجل</p>
          </Link>
        </div>
        <div className="btn">
          <p>تسجيل الدخول</p>
        </div>
      </form>
    </section>
  );
};

export default Login;
