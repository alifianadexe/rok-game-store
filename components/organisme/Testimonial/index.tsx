import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Testimonial() {
  return (
    <MDBContainer className="py-5" data-aos="fade-up">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4 color-palette-1">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0 color-palette-10">
          We provide services and transactions in the game Rise Of Kingdom.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center" d>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 color-palette-10">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3 color-palette-6">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            I top up here because it's cheaper and faster than others, the service is also widely 
            available, starting from bundles, resources, jockeys, and bots.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 color-palette-10">Lisa Cudrow</h5>
          <h6 className="text-primary mb-3">Graphic Designer</h6>
          <p className="px-xl-3 color-palette-6">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 color-palette-10">John Smith</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3 color-palette-6">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
