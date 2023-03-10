import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Story() {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div
            className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
            data-aos="zoom-in"
          >
            <img
              src="/img/Header-9.png"
              width="612"
              height="452"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-5 col-12 ps-lg-60">
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                Top Up Now
                <br /> Win the battle
              </h2>
              <p className="text-lg color-palette-1 mb-30">
                Lest Join Us and Other Player
                <br className="d-sm-block d-none" /> To Be a Winner
              </p>
              <div className="d-md-block d-flex flex-column w-100 ">
                <a
                  className="btn btn-read text-lg rounded-pill bg-div-1"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=628981234567&text=Halo%20mau%20order%20gan"
                  role="button"
                >
                  <FontAwesomeIcon icon={faPhone} size="sm" /> Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
