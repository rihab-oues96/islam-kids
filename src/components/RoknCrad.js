import chahada from "../assets/images/chahada.png";

import "./RoknCard.scss";

const RoknCard = ({ id, name, description, image }) => {
  return (
    <div className="rokn-card">
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
