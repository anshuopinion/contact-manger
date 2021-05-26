import { ModalHeader } from "@chakra-ui/modal";
import { ModalBody } from "@chakra-ui/modal";
import { ModalCloseButton } from "@chakra-ui/modal";
import { ModalContent } from "@chakra-ui/modal";
import { ModalOverlay } from "@chakra-ui/modal";
import { Modal } from "@chakra-ui/modal";
import React from "react";

const Kmodal = ({ onOpen, isOpen, onClose, children, title }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Kmodal;
