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
import Swal from "sweetalert2";
import Image from "next/dist/client/image";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JokiAccount() {
  const [optSmModal, setOptSmModal] = useState(false);
  const toggleShow = () => setOptSmModal(!optSmModal);

  return (
    <section id="joki" className="header  pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Jockey Account
        </h2>
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <div className="top-up-categories mt-60 mb-30">
              <div className="main-content text-center">
                <div className="row gap-lg-0 gap-5" data-aos="fade-up">
                  <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                    <div className="categories-card">
                      <div
                        className="align-items-center mb-24 hover-2"
                        onClick={() => {
                          Swal.fire({
                            title: "Daily",
                            html: "Claim VIP<br/> Open Traven<br/> Material Products<br/> Train and Heal Troopers<br/> Upgrade Building and Research <br/> Buy Courier Station Items",
                            width: 650,
                            padding: "3em",
                            color: "#ea8823",
                            background: "#fff",
                          });
                        }}
                      >
                        <Image src="/icon/24H.svg" height={60} width={60} />
                        <p className="color-palette-6  mb-24 mt-25 text-2xl">
                          Daily
                        </p>
                      </div>
                      <div>
                        <p className="text-sm color-palette-2 mb-1">Price</p>
                        <p className="text-2xl color-palette-7 fw-medium m-0">
                          <sup>$</sup>9.6 USD/Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                    <div
                      className="categories-card"
                      onClick={() => {
                        Swal.fire({
                          title: "Daily Plus",
                          html: "Include Daily Service + <br/> Clear Sunset Conyon Mission<br/> Gather Resource<br/> Clear Barbarian<br/> Donate Alliance, <br/>Use Speed Gathering Item<br/>Use Power Up Book",
                          width: 650,
                          padding: "3em",
                          color: "#ea8823",
                          background: "#fff",
                        });
                      }}
                    >
                      <div className="align-items-center mb-24  hover-2">
                        <Image src="/icon/24Hplus.png" height={60} width={60} />
                        <p className="color-palette-6  mb-24 mt-25 text-2xl">
                          Daily Plus
                        </p>
                      </div>
                      <div>
                        <p className="text-sm color-palette-2 mb-1 ">Price</p>
                        <p className="text-2xl color-palette-7 fw-medium m-0">
                          <sup>$</sup>32 USD/Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                    <div
                      className="categories-card"
                      onClick={() => {
                        Swal.fire({
                          title: "Special",
                          html: "AOO, Hunt Babarkan, Marauder, Clear Tribal and Cave",
                          width: 650,
                          padding: "3em",
                          color: "#ea8823",
                          background: "#fff",
                        });
                      }}
                    >
                      <div className="align-items-center mb-24 hover-2">
                        <Image
                          src="/icon/special_ico.svg"
                          height={70}
                          width={70}
                        />
                        <p className="color-palette-6 mb-0  mb-24 mt-25 text-2xl">
                          Special
                        </p>
                      </div>
                      <div>
                        <p className="text-sm color-palette-2 mb-1">Price</p>
                        <p className="text-2xl color-palette-7 fw-medium m-0">
                          <sup>$</sup>10 USD/Mission
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gap-lg-0 gap-5 mt-50" data-aos="fade-up">
                  <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                    <div
                      className="categories-card"
                      onClick={() => {
                        Swal.fire({
                          title: "Special",
                          html: "AOO, Hunt Babarkan, Marauder, Clear Tribal and Cave",
                          width: 650,
                          padding: "3em",
                          color: "#716add",
                          background: "#fff",
                        });
                      }}
                    >
                      <div className="align-items-center mb-24 hover-2">
                        <Image src="/icon/mge.svg" height={70} width={70} />
                        <p className="color-palette-6 mb-24 mt-25 text-2xl">
                          MGE
                          <br />
                        </p>
                      </div>
                      <div>
                        <p className="text-sm color-palette-2 mb-1 ">Price</p>
                        <p className="text-2xl color-palette-7 fw-medium m-0">
                          <sup>$</sup>8 USD/24H
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                    <div
                      className="categories-card"
                      onClick={() => {
                        Swal.fire({
                          title: "Special",
                          html: "AOO, Hunt Babarkan, Marauder, Clear Tribal and Cave",
                          width: 650,
                          padding: "3em",
                          color: "#716add",
                          background: "#fff",
                        });
                      }}
                    >
                      <div className="align-items-center mb-24 hover-2">
                        <Image src="/icon/war.svg" height={60} width={60} />
                        <p className="color-palette-6 mb-24 mt-25 text-2xl">
                          WAR
                          <br />
                        </p>
                      </div>
                      <div>
                        <p className="text-sm color-palette-2 mb-1">Price</p>
                        <p className="text-2xl color-palette-7 fw-medium m-0">
                          <sup>$</sup>8 USD/24H
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                    <div
                      className="categories-card"
                      onClick={() => {
                        Swal.fire({
                          title: "Special",
                          html: "AOO, Hunt Babarkan, Marauder, Clear Tribal and Cave",
                          width: 650,
                          padding: "3em",
                          color: "#716add",
                          background: "#fff",
                        });
                      }}
                    >
                      <div className="align-items-center mb-24 hover-2">
                        <FontAwesomeIcon
                          size="2x"
                          icon={faCutlery}
                          style={{ color: "#FFA30F" }}
                        />
                        <p className="color-palette-6 mb-24 mt-25 text-2xl">
                          GB Kill
                          <br />
                        </p>
                      </div>
                      <div>
                        <p className="text-sm color-palette-2 mb-1">Price</p>
                        <p className="text-2xl color-palette-7 fw-medium m-0">
                          <sup>$</sup>8 USD/24H
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
