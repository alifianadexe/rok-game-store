import Illustration from "./Illustration";

export default function TopUp() {
  return (
    <section id="topup" className="header pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Top Up</h2>
        <div className="row gap-lg-0 gap-5">
          <Illustration />
          <div className="col-lg-6 col-sm-12 d-lg-block">
            <div className="latest-transaction">
              <div className="main-content main-content-table overflow-auto">
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
                    <tr className="align-middle">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-1.png"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-9 m-0">
                            Starlit Carol
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium text-start color-palette-7 m-0">
                          <sup>$</sup>5 USD
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status success"></span>
                          <p className="fw-medium text-start color-palette-8 m-0 position-relative">
                            Available
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-middle text-center">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-2.png"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-9 m-0">
                            Supply Depot
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium text-start color-palette-7 m-0">
                          <sup>$</sup>5 USD
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status success"></span>
                          <p className="fw-medium text-start color-palette-8 m-0 position-relative">
                            Available
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-middle text-center">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-3.png"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-9 m-0">
                            Special Bundle Resource
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium text-start color-palette-7 m-0">
                          <sup>$</sup>5 - <sup>$</sup>100 USD
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status success"></span>
                          <p className="fw-medium text-start color-palette-8 m-0 position-relative">
                            Available
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-middle text-center">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-4.png"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-9 m-0">
                            Growth Fund
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium text-start color-palette-7 m-0">
                          <sup>$</sup>14.7 USD
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status success"></span>
                          <p className="fw-medium text-start color-palette-8 m-0 position-relative">
                            Available
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-middle text-center">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-4.jpg"
                          width="80"
                          height="60"
                          alt=""
                        />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-9 m-0">
                            Gem Store
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium text-start color-palette-7 m-0">
                          <sup>$</sup>10 USD
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status success"></span>
                          <p className="fw-medium text-start color-palette-8 m-0 position-relative">
                            Available
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
