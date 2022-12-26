import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

export default function App() {
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleShow = () => setOptSmModal(!optSmModal);

  return (
    <>
      <MDBBtn onClick={toggleShow}>Small modal</MDBBtn>
      <MDBModal show={optSmModal} tabIndex="-1" setShow={setOptSmModal}>
        <MDBModalDialog size="sm">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Small modal</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
