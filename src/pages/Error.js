import "./Error.scss";
import error from "../assets/images/notFound.png";

const Error = () => {
  return (
    <section className="error ">
        <p>خطأ في الصفحة</p>
      <img src={error} alt="error-img" />
    </section>
  );
};

export default Error;
