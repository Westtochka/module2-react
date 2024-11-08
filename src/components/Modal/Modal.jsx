import s from "./Modal.module.css";

const Modal = ({ children, tittle = "Default modal", onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
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
