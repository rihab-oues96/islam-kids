import RoknCard from "../components/RoknCrad";
import arkanislam from "../assets/images/arkanIslam.png";
import Modal from "../components/Modal";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import { Islam } from "../data";
import "./ArkanIslam.scss";

const ArkanIslam = () => {
  return (
    <section className="arkan-islam">
      <Header />
      <div className="arkan-heading">
        <div className="image">
          <img src={arkanislam} alt="arkan-islam-image"></img>
        </div>
        <p>
          عن عبد الله بن عمر -رضي الله عنهما- قال: قال رسول الله -صلى الله عليه
          وسلم-: (
          <span>
            بُنِيَ الإسْلامُ علَى خَمْسٍ، شَهادَةِ أنْ لا إلَهَ إلَّا اللَّهُ،
            وأنَّ مُحَمَّدًا عَبْدُهُ ورَسولُهُ، وإقامِ الصَّلاةِ، وإيتاءِ
            الزَّكاةِ، وحَجِّ البَيْتِ، وصَوْمِ رَمَضانَ
          </span>
          )
        </p>
      </div>

      <div className="cards">
        {Islam.map((rokn, index) => (
          <RoknCard key={index} id={rokn.id} {...rokn} />
        ))}
        <Modal />
      </div>
      <Footer />
    </section>
  );
};

export default ArkanIslam;
