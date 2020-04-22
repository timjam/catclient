import React from 'react';
import { Modal } from 'react-bootstrap';
import { CatModalProps } from './../../types/CatCardPopUp';
import CatCard from './CatCard';

const CatModal = (props: CatModalProps) => {
  const { cat, show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose} style={{ color: 'black' }}>
      <CatCard cat={cat} />
    </Modal>
  );
};

export default CatModal;
