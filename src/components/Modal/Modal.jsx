import { useEffect } from "react";
import s from "./Modal.module.css";
import { FcBiotech } from "react-icons/fc";

const Modal = ({ children, tittle = "Default modal", onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      // console.log(e.key);
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    const timeoutId = setTimeout(() => {
      console.log("Hello, ", <FcBiotech />);
    }, 10000);

    return () => {
      console.log("Мене закрили!");
      clearInterval(intervalId);
      clearTimeout(timeoutId);

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1>{tittle}</h1>
          <hr />
        </>{" "}
        {children}
        <button onClick={onClose} className={s.overlay}>
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
