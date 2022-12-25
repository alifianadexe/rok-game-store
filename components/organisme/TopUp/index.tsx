import Image from "next/dist/client/image";
import Illustration from "./Illustration";

export default function TopUp() {
  return (
    <section className="header pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Top Up Gem</h2>
        <div className="row gap-lg-0 gap-5">
          <Illustration />
          <div className="col-lg-6 col-12 d-lg-block d-none">
            <div className="latest-transaction">
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className="text-start" scope="col">
                        Game
                      </th>
                      <th scope="col">Item</th>
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
                          <p className="game-title fw-medium text-start color-palette-1 m-0">
                            Mobile Legends: The New Battle 2021
                          </p>
                          <p className="text-xs fw-normal text-start color-palette-2 m-0">
                            Desktop
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          200 Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          Rp 290.000
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status pending"></span>
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            Pending
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
                          <p className="game-title fw-medium text-start color-palette-1 m-0">
                            Call of Duty:Modern
                          </p>
                          <p className="text-xs fw-normal text-start color-palette-2 m-0">
                            Desktop
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          550 Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          Rp 740.000
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status success"></span>
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            Success
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
                          <p className="game-title fw-medium text-start color-palette-1 m-0">
                            Clash of Clans
                          </p>
                          <p className="text-xs fw-normal text-start color-palette-2 m-0">
                            Mobile
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          100 Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          Rp 120.000
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status failed"></span>
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            Failed
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
                          <p className="game-title fw-medium text-start color-palette-1 m-0">
                            The Royal Game
                          </p>
                          <p className="text-xs fw-normal text-start color-palette-2 m-0">
                            Mobile
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          225 Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          Rp 200.000
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status pending"></span>
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            Pending
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
