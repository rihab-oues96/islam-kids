import { useContext } from "react";
import { AppContext } from "../context";

import close from "../assets/icons/close.svg";

import "./Modal.scss";

const Modal = () => {
  const { isModalOpen, closeModal, videoUrl } = useContext(AppContext);

  return (
    <>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Modal;
