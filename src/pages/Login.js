import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import logo from "../assets/images/logo.png";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { logInHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logInHandler(email, password);
      navigate("/tasks");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <section className="login">
      <form>
        <div className="logo">
          <img src={logo} alt="logo_img" />
        </div>

        {error && (
          <div className="alert">
            <p>خطأ في المعطيات </p>
            <p>أعد المحاولة</p>
          </div>
        )}

        <div className="text-area">
          <p>ايميل المستخدم</p>
          <input
            type="text"
            placeholder=" أدخل الايميل"
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
        <div className="question">
          <p>نسيت كلمة السر؟</p>
          <Link to="register">
            <p>سجل</p>
          </Link>
        </div>

        <div className="btn" onClick={handleSubmit}>
          <p>تسجيل الدخول</p>
        </div>
      </form>
    </section>
  );
};

export default Login;
