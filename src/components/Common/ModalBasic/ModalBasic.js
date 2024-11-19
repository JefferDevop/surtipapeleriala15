import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ButtonModal from "./ButtonModal";
import AddEditProductForm from "./AddEditProductForm";

import styles from "./ModalBasic.module.scss"

export function ModalBasic(props) {
  const {showModal, data, titleButton, iconButton, title, children } = props;

console.log(showModal);
  const [modal, setModal] = useState(showModal);

  const toggle = () => setModal(!modal);

  return (
    <>
      <ButtonModal
        toggle={toggle}
        titleButton={titleButton}
        iconButton={iconButton}
      />

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className={styles.headerModal}>
          {" "}
          {data} {title}
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter />        
      </Modal>
    </>
  );
}
