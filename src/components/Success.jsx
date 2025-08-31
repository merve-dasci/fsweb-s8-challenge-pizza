import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Success.css";

export default function Success({ order }) {
  const history = useHistory();
  const location = useLocation();

  const data = location.state || order || {};
  const toppings = data.malzemeler || data.toppings || [];
  const adet = Number(data.adet || data.quantity || 1) || 1;

  function parsePrice(v) {
    if (!v && v !== 0) return 0;
    if (typeof v === "number") return v;
    const s = String(v)
      .replace(",", ".")
      .replace(/[^\d.]/g, "");
    return parseFloat(s) || 0;
  }

  const malzemeFiyat = 5;
  const extrasPerPizza = toppings.length * malzemeFiyat;
  const selections = extrasPerPizza;
  const shipping = parsePrice(data.shipping || data.deliveryFee || 0);
  const totalFromPayload = parsePrice(data.toplam || data.total || 0);
  const defaultBase = 85.5;
  const total = totalFromPayload || (defaultBase + extrasPerPizza) * adet;

  return (
    <section className="success-hero">
      <div className="success-inner">
        <img
          className="success-logo"
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler"
        />
        <p className="success-kicker">lezzetin yolda</p>
        <h1 className="success-title">SİPARİŞ ALINDI</h1>

        <div className="order-summary">
          <div className="left">
            <h3>{data.title || "Position Absolute Acı Pizza"}</h3>

            {toppings.length > 0 ? (
              <ul className="item-list">
                {toppings.map((t, i) => (
                  <li key={i}>
                    <span>{t}</span>
                    <span>{malzemeFiyat.toFixed(2)}₺</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ek malzeme yok</p>
            )}
          </div>

          <div className="right">
            <div className="box">
              <div className="row">
                <span>Seçimler</span>
                <span data-cy="success-selections">
                  {selections.toFixed(2)}₺
                </span>
              </div>
              <div className="row">
                <span>Kargo</span>
                <span data-cy="success-selections">{shipping.toFixed(2)}₺</span>
              </div>
              <div className="row total">
                <strong>Toplam</strong>
                <strong data-cy="success-selections">
                  {total.toFixed(2)}₺
                </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <button onClick={() => history.push("/")} className="btn-home">
            Anasayfa
          </button>
        </div>
      </div>
      <footer className="site-footer">
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
      </footer>
    </section>
  );
}
