import { Button } from "reactstrap"
import "./Home.css"
export default function Home() {
    return (
      <section className="home-section">
        <div className="hero-inner">
          <img
            className="brand-logo"
            src="/images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler"
          />
          <h1 className="home-title barlow-regular">
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </h1>
          <div className="cta">
            <Button className="home-button" href="/order">
              ACIKTIM
            </Button>
          </div>
        </div>
      </section>
    );
}