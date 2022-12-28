import Image from "next/image";
import Menu from "./menu";
import ToggleMenu from "./ToggleMenu";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-navbar pt-lg-30 pb-lg-30 pt-30 pb-20">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/icon/rise-of-kingdoms.png" width={90} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" href="/" />
              <Menu title="Top Up" href="/#topup" />
              <Menu title="Jockey" href="/#joki" />
              <Menu title="Bot" href="/#bot" />
              <Menu title="Convert" href="/#convert" />
              <Menu title="Others" href="/#others" />
              <Menu
                title="Contact"
                href="https://api.whatsapp.com/send?phone=628981234567&text=Halo%20mau%20order%20gan"
              />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
