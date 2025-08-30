import React from "react" 
import "./Success.css"
import { useHistory, useLocation } from "react-router-dom"
export default function Success({ order }) {
    const history = useHistory();
    const location = useLocation()
    const payload = location.state || order;
    return (
        <section className="success-hero">
            <div className="success-inner">
                <img className="success-logo" src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler"  />
                <h1 className="success-title">TEBRİKLER!<br/>SİPARİŞİNİZ ALINDI</h1>

                <div className="success-actions">
                    <button className="btn btn-home" onClick={() => history.push("/")}>Anasayfa</button>
                    <button className="btn btn-order" onClick={() => history.push("/order")}>Yeni Sipariş</button>
                </div>
                
                
            </div>
        </section>
    )
}