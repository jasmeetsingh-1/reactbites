import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import "./cssFiles/CartModal/Cart.css";

function Modal(props) {
  function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  }

  function ModalOverLay(props) {
    const cssClassName = classes.modal + " " + props.className;
    return (
      <div className={cssClassName}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  }

  const portalElement = document.getElementById("cart-modal");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
