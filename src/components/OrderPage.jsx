import React from "react";
import { Container, Nav, NavItem } from "reactstrap";
import OrderForm from "./OrderForm";
import { NavLink } from "react-router-dom";
import "./OrderPage.css"


export default function OrderPage({ onOrderSaved }) {
  return (
    <section id="order-page">
      <Container>
        <img
          style={{}}
          src="/images/iteration-2-images/pictures/form-banner.png"
        />
        <Nav className="hero-nav">
          <NavItem className="nav-item1">
            <NavLink to="/">Anasayfa</NavLink>
          </NavItem>

          <NavItem className="nav-item2">
            <NavLink to="/order">Sipariş Oluştur</NavLink>
          </NavItem>
        </Nav>
        <h2 className="order-title" data-cy="order-title">
          Position Absolute Acı Pizza
        </h2>
        <div
          className="meta-row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>85.50₺</span>
          <span>4.9</span>
          <span>(200)</span>
        </div>
        <p className="product-desc">
          Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza domates, peynir ve genellikle çeşitli diğer
          malzemelerle kaplanmış, daha sonra geleneksel odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarklak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşlan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.
        </p>
        <OrderForm onOrderSaved={onOrderSaved} />
      </Container>
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
                  <img src="/images/iteration-2-images/footer/icons/icon-1.png" />
                  34L Londonderry Road, İstanbul Türkiye
                </li>
                <li>
                  <img src="/images/iteration-2-images/footer/icons/icon-2.png" />
                  contact@teknolojik-yemekler.com
                </li>
                <li>
                  <img src="/images/iteration-2-images/footer/icons/icon-3.png" />
                  +90 212 000 00 00
                </li>
              </ul>
            </div>

            <div className="footer-col footer-menu">
              <h6>Hot Menu</h6>
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
    </section>
  );
}
      