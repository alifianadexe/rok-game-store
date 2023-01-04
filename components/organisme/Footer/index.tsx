import Image from "next/dist/client/image";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/img/logo.png" height={140} width={140} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Rise Of Kingdom
                <br /> By Lemon Store
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect Us
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="mailto: hi@store.gg"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        WhatsApp: 081575127090
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="mailto: team@store.gg"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Instagram: galeritopupindonesia
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="http://maps.google.com/?q=Pasific 12,
                                            Jakarta Selatan"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Telegram: 081575127090
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="tel: 02111229090"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Discord: Lemon ROK #7983
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
