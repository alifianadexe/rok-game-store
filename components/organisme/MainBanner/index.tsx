
import Illustration from "./Illustration";

export default function MainBanner() {
  return (
    <section className="header pt-601 pb-501 background">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <h1 className="header-title color-palette-5 fw-bold">
              Top Up Now
              <br className="d-sm-block d-none" />{" "}
              <span className="underline-blue">Get More Experience</span>
            </h1>
            <p className="mt-30 mb-30 text-lg color-palette-5">
              we provide many ways for you to be a winner
            </p>
            <div className="d-flex flex-lg-row flex-column gap-4">
              <a
                className="btn btn-get text-lg text-white rounded-pill"
                href="#feature"
                role="button"
              >
                Get Started
              </a>
            </div>
          </div>

          <Illustration />
        </div>
      </div>
    </section>
  );
}
