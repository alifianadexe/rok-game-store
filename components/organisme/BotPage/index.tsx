export default function BotPage() {
  return (
    <section className="header pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Bot Account</h2>
        <div className="pricing pricing--rabten" data-aos="fade-up">
          <div className="pricing__item">
            <div className="icon icon--home"></div>
            <h3 className="pricing__title">Individuals</h3>
            <p className="pricing__sentence">Single user license</p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>9
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">per year</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">1 GB of space</li>
              <li className="pricing__feature">Support at $25/hour</li>
              <li className="pricing__feature">Small social media package</li>
            </ul>
            <button className="pricing__action">Choose plan</button>
          </div>
          <div className="pricing__item">
            <div className="icon icon--store"></div>
            <h3 className="pricing__title">Small Team</h3>
            <p className="pricing__sentence">Up to 5 users</p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>79
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">per year</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">5 GB of space</li>
              <li className="pricing__feature">Free support</li>
              <li className="pricing__feature">Full social media package</li>
            </ul>
            <button className="pricing__action">Choose plan</button>
          </div>
          <div className="pricing__item">
            <div className="icon icon--apartment"></div>
            <h3 className="pricing__title">Organization</h3>
            <p className="pricing__sentence">Unlimited users</p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>499
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">per year</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">Unlimited space</li>
              <li className="pricing__feature">Free support</li>
              <li className="pricing__feature">Full social media package</li>
            </ul>
            <button className="pricing__action">Choose plan</button>
          </div>
        </div>
      </div>
    </section>
  );
}
