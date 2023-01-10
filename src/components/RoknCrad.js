import { useContext } from "react";
import { AppContext } from "../context";
import "./RoknCard.scss";

const RoknCard = ({ id, name, description, image, video }) => {
  const { openModal } = useContext(AppContext);

  return (
    <div className="rokn-card" onClick={() =>openModal(video) }>
      <div className="description">
        <p className="name">
          <span className="number">{id}</span>
          <span>{name}</span>
        </p>
        <p>{description}</p>
      </div>
      <div className="image">
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default RoknCard;
