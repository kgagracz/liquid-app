import Portal from "../Portal";
import { ReactNode } from "react";
import "./Modal.modules.scss";
import { ReactComponent as CloseIcon } from "../../Icons/close.svg";

interface IModalProps {
  children: ReactNode;
  open: boolean;
  handleOpen: (open: boolean) => void;
  title?: string;
}

const Modal = ({ children, open, handleOpen, title }: IModalProps) => (
  <Portal>
    {open && (
      <>
        <div className="modal-overlay" onClick={() => handleOpen(false)}></div>
        <div className="modal-content">
          <div className="modal-head">
            {title && <p>{title}</p>}{" "}
            <span
              onClick={() => handleOpen(false)}
              className="modal-head__close-icon"
            >
              <CloseIcon />
            </span>
          </div>
          {children}
        </div>
      </>
    )}
  </Portal>
);

export default Modal;
