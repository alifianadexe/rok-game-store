import Image from 'next/image';
import Menu from './menu';
import ToggleMenu from './ToggleMenu';

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
                            <Menu title="Home" active />
                            <Menu title="Top Up"/>
                            <Menu title="Joki" />
                            <Menu title="BOT" />
                            <Menu title="Convert" />
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}
