import doua from "../assets/images/doua-girl.png";
import DouaaCard from "../components/DouaaCard";
import Modal from "../components/Modal";
import { douaa } from "../data";
import "./Douaa.scss";

const Douaa = () => {
  return (
    <section className="douaa">
      <div className="douaa-heading">
        <p>
          قال تعالى: ﴿
          <span>
            وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ
            الدَّاعِ إِذَا دَعَانِ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي
            لَعَلَّهُمْ يَرْشُدُونَ
          </span>
          ﴾ [البقرة: 186]
        </p>
        <div className="image">
          <img src={doua} />
        </div>
      </div>
      <div className="douaa-cards">
        {douaa.map((rokn, index) => (
          <DouaaCard key={index} id={rokn.id} {...rokn} />
        ))}
        <Modal />
      </div>
    </section>
  );
};

export default Douaa;
