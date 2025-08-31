import React from "react";
import { Button, Container } from "reactstrap";
import "./Home.css";

export default function Home() {
  const categories = [
    { src: "/images/iteration-2-images/icons/1.svg", label: "Yeni! Kore" },
    { src: "/images/iteration-2-images/icons/2.svg", label: "Pizza" },
    { src: "/images/iteration-2-images/icons/3.svg", label: "Burger" },
    { src: "/images/iteration-2-images/icons/4.svg", label: "Kızartmalar" },
    { src: "/images/iteration-2-images/icons/5.svg", label: "Fast Food" },
    { src: "/images/iteration-2-images/icons/6.svg", label: "İçecek" },
  ];

  const products = [
    {
      img: "/images/iteration-2-images/pictures/food-1.png",
      title: "Terminal Pizza",
      price: "60₺",
      rating: "4.9",
    },
    {
      img: "/images/iteration-2-images/pictures/food-2.png",
      title: "Position Absolute Acı Pizza",
      price: "60₺",
      rating: "4.9",
    },
    {
      img: "/images/iteration-2-images/pictures/food-3.png",
      title: "useEffect Tavuklu Burger",
      price: "60₺",
      rating: "4.9",
    },
  ];

  return (
    <main className="home-page">
      <header className="home-hero">
        <Container className="hero-inner">
          <img
            src="/images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler"
          />
          <h1 className="hero-title">
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </h1>
          <Button data-cy="hero-cta" className="hero-cta" href="/order">
            ACIKTIM
          </Button>
        </Container>
      </header>

      <div className="icons-bar">
        <Container className="icons-row">
          {categories.map((c, i) => (
            <div data-cy={`category-${i}`} className="icon-pill" key={i}>
              <img src={c.src} alt={c.label} />
              <span>{c.label}</span>
            </div>
          ))}
        </Container>
      </div>

      <section className="promo-section">
        <Container className="promo-grid">
          <div className="promo-left">
            <div className="promo-large">
              <img
                src="/images/iteration-2-images/pictures/food-1.png"
                alt="Özel Lezzet"
              />
              <div className="promo-large-text">
                <h3>Özel Lezzetus</h3>
                <p>Position Absolute Acı Burger</p>
                <Button outline className="promo-btn" href="/order">
                  Sipariş Ver
                </Button>
              </div>
            </div>
          </div>

          <div className="promo-right">
            <div className="promo-small dark">
              <div className="small-text">
                <h4>Hackathon Burger Menü</h4>
                <p>Yanında patates + içecek</p>
                <img src="/images/iteration-2-images/cta/kart-2.png" alt="" />
                <Button className="white-btn">Sipariş Ver</Button>
              </div>
            </div>

            <div className="promo-small light">
              <div className="small-text">
                <h4>Çooook hızlı npm gibi kurye</h4>
                <Button className="white-btn">Sipariş Ver</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="">
        <Container>
          <p className="satisfy-regular">En çok tercih edilen menüler</p>
          <h2 style={{ textAlign: "center" }}>
            Acıktıran Kodlara Doyuran Lezzetler
          </h2>
          <div className="strip-pills">
            {" "}
            <div className="strip-pill active">
              {" "}
              <img src="/images/iteration-2-images/icons/1.svg" alt="Kore" />
              <span>Ramen</span>{" "}
            </div>{" "}
            <div className="strip-pill">
              <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
              <span>Pizza</span>{" "}
            </div>{" "}
            <div className="strip-pill">
              {" "}
              <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
              <span>Burger</span>{" "}
            </div>{" "}
            <div className="strip-pill">
              {" "}
              <img
                src="/images/iteration-2-images/icons/4.svg"
                alt="Kızartma"
              />
              <span>French Fries</span>{" "}
            </div>{" "}
            <div className="strip-pill">
              {" "}
              <img
                src="/images/iteration-2-images/icons/5.svg"
                alt="Fast Food"
              />
              <span>Fast Food</span>{" "}
            </div>{" "}
            <div className="strip-pill">
              {" "}
              <img
                src="/images/iteration-2-images/icons/6.svg"
                alt="İçecek"
              />{" "}
              <span>Soft drinks</span>{" "}
            </div>{" "}
          </div>
        </Container>
      </section>

      <section className="products-section">
        <Container className="products-grid">
          {products.map((p, i) => (
            <article className="product-card" key={i}>
              <div data-cy={`product-${i}`} className="product-img-wrap">
                <img src={p.img} alt={p.title} />
              </div>
              <h5 className="product-title">{p.title}</h5>
              <div className="product-meta">
                <span className="price">{p.price}</span>
                <span className="rating">{p.rating}</span>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <footer className="site-footer">
        <Container>
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <img
                src="/images/iteration-2-images/footer/logo-footer.svg"
                alt="Teknolojik Yemekler"
                className="footer-logo"
              />
              <ul className="contact-list">
                <li>
                  <img
                    src="/images/iteration-2-images/footer/icons/icon-1.png"
                    alt=""
                  />
                  34L Londonderry Road, İstanbul Türkiye
                </li>
                <li>
                  <img
                    src="/images/iteration-2-images/footer/icons/icon-2.png"
                    alt=""
                  />
                  contact@teknolojik-yemekler.com
                </li>
                <li>
                  <img
                    src="/images/iteration-2-images/footer/icons/icon-3.png"
                    alt=""
                  />
                  +90 212 000 00 00
                </li>
              </ul>
            </div>

            <div className="footer-col footer-menu">
              <h6>Sıcak Menüler</h6>
              <ul>
                <li>Terminal Pizza</li>
                <li>Spicy Chicken Pizza</li>
                <li>Classic Margherita</li>
                <li>Position Absolute Acı Burger</li>
              </ul>
            </div>

            <div className="footer-col footer-insta">
              <h6>Instagram</h6>
              <div className="insta-grid">
                <img
                  src="/images/iteration-2-images/footer/insta/li-0.png"
                  alt=""
                />
                <img
                  src="/images/iteration-2-images/footer/insta/li-1.png"
                  alt=""
                />
                <img
                  src="/images/iteration-2-images/footer/insta/li-2.png"
                  alt=""
                />
                <img
                  src="/images/iteration-2-images/footer/insta/li-3.png"
                  alt=""
                />
                <img
                  src="/images/iteration-2-images/footer/insta/li-4.png"
                  alt=""
                />
                <img
                  src="/images/iteration-2-images/footer/insta/li-5.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <small>© 2023 Teknolojik Yemekler. Tüm hakları saklıdır.</small>
          </div>
        </Container>
      </footer>
    </main>
  );
}
