import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faGears,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/dist/client/image";

export default function BotPage() {
  return (
    <section id="bot" className="header pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Bot Service</h2>
        <div className="pricing pricing--rabten" data-aos="fade-up">
          <div className="pricing__item">
            <FontAwesomeIcon size="2x" icon={faRobot} />
            <h3 className="pricing__title color-palette-9">BOT Resources</h3>
            <p className="pricing__sentence">
              Gather Resource (Wood, Corn, Stone, Gold)
            </p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>10
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">/ 10M Resources</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">
                10M Wood, 10M Corn <br /> 10M Stone, 5M Gold
              </li>
              <li className="pricing__feature">Fast, Clear, and Anti-BAN</li>
              <li className="pricing__feature">24H Online</li>
            </ul>
          </div>
          <div className="pricing__item">
            <Image src="/icon/gems.svg" height={40} width={32} />
            <h3 className="pricing__title color-palette-9">BOT Gems</h3>
            <p className="pricing__sentence">
              Take Gems of Your Request
              <br />
              <br />
            </p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>5
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">/ 100 Gems</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">2 Days Work</li>
              <li className="pricing__feature">Fast and Clear</li>
              <li className="pricing__feature">24H Online</li>
            </ul>
          </div>
          <div className="pricing__item">
            <FontAwesomeIcon size="2x" icon={faFileSignature} />
            <h3 className="pricing__title color-palette-9">BOT Title Giver</h3>
            <p className="pricing__sentence">
              Give Title What You Want
              <br />
              <br />
            </p>
            <div className="pricing__price">
              <span className="pricing__anim pricing__anim--1">
                <span className="pricing__currency">$</span>70
              </span>
              <span className="pricing__anim pricing__anim--2">
                <span className="pricing__period">/ title</span>
              </span>
            </div>
            <ul className="pricing__feature-list">
              <li className="pricing__feature">Any Title Giver</li>
              <li className="pricing__feature">Faster Than Another</li>
              <li className="pricing__feature">Permanent Title</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
