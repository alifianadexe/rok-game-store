import Illustration from "./Illustration";
import React from "react";

const dataRow = [
  [
    {
      title: "Nama Bundle",
      image: "/img/rok1.1.png",
      price: "$90",
      price2: "$91",
      status: "available",
    },
    {
      title: "Nama Bundle",
      image: "/gamber.jpg",
      price: "$90",
      price2: "$91",
      status: "available",
    },
    {
      title: "Nama Bundle",
      image: "/gamber.jpg",
      price: "$90",
      price2: "$91",
      status: "available",
    },
  ],
  [
    {
      title: "Nama Bundle",
      image: "/gamber.jpg",
      price: "$90",
      price2: "$91",
      status: "available",
    },
    {
      title: "Nama Bundle",
      image: "/gamber.jpg",
      price: "$90",
      price2: "$91",
      status: "available",
    },
    {
      title: "Nama Bundle",
      image: "/gamber.jpg",
      price: "$90",
      price2: "$91",
      status: "available",
    },
  ],
];

export default function TopUp() {
  const [index, setIndex] = React.useState(0);

  return (
    <section id="topup" className="header pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Top Up</h2>
        <div className="row gap-lg-0 gap-5">
          <Illustration />
          <div className="col-lg-6 col-sm-12 d-lg-block">
            <div className="latest-transaction">
              <div className="main-content main-content-table overflow-auto">
                <div className="slideshow">
                  <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                  >
                    {dataRow.map((data, index) => (
                      <div className="slide" key={index}>
                        <table className="table table-borderless">
                          <thead>
                            <tr className="color-palette-1">
                              <th className="text-start" scope="col">
                                Category
                              </th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((data, index) => (
                              <tr className="align-middle tex-center">
                                <th scope="row">
                                  <img
                                    className="float-start me-3 mb-lg-0 mb-3"
                                    src={data.image}
                                    width="80"
                                    height="60"
                                    alt=""
                                  />
                                  <div className="game-title-header">
                                    <p className="game-title fw-medium text-start color-palette-9 m-0">
                                      {data.title}
                                    </p>
                                  </div>
                                </th>
                                <td>
                                  <p className="fw-medium text-start color-palette-7 m-0">
                                    <sup>$</sup>
                                    {data.price} - <sup>$</sup>
                                    {data.price} USD
                                  </p>
                                </td>
                                <td>
                                  <div>
                                    <span className="float-start icon-status success"></span>
                                    <p className="fw-medium text-start color-palette-8 m-0 position-relative">
                                      {data.status}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>

                  <div className="slideshowDots">
                    {dataRow.map((_, idx) => (
                      <div
                        key={idx}
                        className={`slideshowDot${
                          index === idx ? " active" : ""
                        }`}
                        onClick={() => {
                          setIndex(idx);
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
