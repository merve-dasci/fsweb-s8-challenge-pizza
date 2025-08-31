
import { Container } from "reactstrap";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Container className="hero">
        <div>
            <img
             className="hero-logo"
             src="images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler"
          />
        </div>
        

        
      </Container>
    </header>
  );
}
