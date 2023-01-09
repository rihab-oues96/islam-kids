import "./ArkanIslam.scss";

import RoknCard from "../components/RoknCrad";

import { Islam } from "../data";

const ArkanIslam = () => {
  return (
    <section className="arkan-islam">
      <h2> أركان الاسلام الخمسة </h2>
      <div className="cards">
        {Islam.map((rokn) => (
          <RoknCard id={rokn.id} {...rokn} />
        ))}
      </div>
    </section>
  );
};

export default ArkanIslam;
