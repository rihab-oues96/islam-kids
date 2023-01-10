import { useContext } from "react";
import { AppContext } from "../context";
import "./DouaaCard.scss";

const DouaaCard = ({ id, name, content, image, video }) => {
  const { openModal } = useContext(AppContext);
  return (
    <div className="douaa-card" onClick={() => openModal(video)}>
      <div className="description">
        <p className="name">
          <span className="number">{id}</span>
          <span>{name}</span>
        </p>
        <p className="content">{content}</p>
      </div>
      <div className="image">
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default DouaaCard;
