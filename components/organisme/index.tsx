import GameItems from '../molekul/GameItems/index';

export default function FeaturedGame() {
    return (
    <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Convert<br/> Payment
            </h2>
            <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4" data-aos="fade-up">
                <GameItems title="PayPal" category=" " thumbnail="Thumbnail-1" />
                <GameItems title="Crypto Curency" category=" " thumbnail="Thumbnail-2" />
                <GameItems title="Exchange Wise" category=" " thumbnail="Thumbnail-3" />
                <GameItems title="Exchange Western Union" category=" " thumbnail="Thumbnail-4" />
            </div>
        </div>
    </section>

    )
}
