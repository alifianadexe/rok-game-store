export default function BotPage() {
  return (
    <section id="bot" className="header pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">BOT Service</h2>
        <div className="pricing pricing--rabten" data-aos="fade-up">
          <div className="pricing__item">
            <div className="icon icon--home"></div>
            <h3 className="pricing__title">BOT Gather</h3>
            <p className="pricing__sentence">
              Take Gather Resource (Wood, Corn, Stone, Gold)
            </p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>10
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">per 10M Resources</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">
                10M Wood, 10M Corn <br/> 10M Stone, 5M Gold
              </li>
              <li className="pricing__feature">Fast, Clear, and Anti-BAN</li>
              <li className="pricing__feature">24 Hours Online</li>
            </ul>
            <button className="pricing__action">Choose</button>
          </div>
          <div className="pricing__item">
            <div className="icon icon--store"></div>
            <h3 className="pricing__title">BOT Gather Gems</h3>
            <p className="pricing__sentence">Take Gems of Your Request</p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>5
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">per 100 Gems</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">2 Days Work</li>
              <li className="pricing__feature">Fast and Clear</li>
              <li className="pricing__feature">24 Hours Online</li>
            </ul>
            <button className="pricing__action">Choose</button>
          </div>
          <div className="pricing__item">
            <div className="icon icon--apartment"></div>
            <h3 className="pricing__title">BOT Title Giver</h3>
            <p className="pricing__sentence">Give Title What You Want</p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>70
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">per title</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">Any Title Giver</li>
              <li className="pricing__feature">Faster Than Another</li>
              <li className="pricing__feature">Permanent Title</li>
            </ul>
            <button className="pricing__action">Choose</button>
          </div>
        </div>
      </div>
    </section>
  );
}
