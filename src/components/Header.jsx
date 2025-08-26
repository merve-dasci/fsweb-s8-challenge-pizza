
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Container className="hero">
        <img
          className="hero-logo"
          src="images/iteration-1-images/logo.svg"         
          alt="Teknolojik Yemekler"
        />

       
        <Nav className="hero-nav">
          <NavItem>
            <NavLink href="/">Anasayfa</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#order">Sipariş Oluştur</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </header>
  );
}
