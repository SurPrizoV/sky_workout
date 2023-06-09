import Modal from "./Modal/Modal";
import { ReactComponent as Success } from "../../assets/img/success.svg";
import classes from "./SuccessModal.module.css";
import { useEffect } from "react";

const SuccessModal = ({ setIsSuccessModalShown }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsSuccessModalShown(false);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [setIsSuccessModalShown]);

  return (
    <Modal>
      <div className={classes.content}>
        <h2 className={classes.title}>Ваш прогресс засчитан!</h2>
        <Success />
      </div>
    </Modal>
  );
};

export default SuccessModal;
