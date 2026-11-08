import Carousel from "react-bootstrap/Carousel";
import "./Carousal.css";
import ph1 from "../assets/1.jpg"
import ph2 from "../assets/2.jpg"
import ph3 from "../assets/3.jpg"
import ph4 from "../assets/4.jpg"
import { Link } from "react-router";



function Carousals() {
  return (
    <div className="carousel-container">

      {/* Changing Images */}
      <Carousel
        interval={3000}
        controls={true}
        indicators={true}
        pause={false}
      >
        <Carousel.Item>
          <img
            src={ph1}
            className="d-block w-100 carousel-img "
            alt="Gift 1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={ph2}
            className="d-block w-100 carousel-img "
            alt="Gift 2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={ph3}
            className="d-block w-100 carousel-img "
            alt="Gift 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ph4}
            className="d-block w-100 carousel-img "
            alt="Gift 3"
          />
        </Carousel.Item>
      </Carousel>

      {/* Fixed Caption */}
      <div className="fixed-caption">
        <h1>Make Every Moment Special 🎁</h1>
        <p>Discover beautiful gifts for your loved ones.</p>
        <button className="btn btn-danger"><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Shop now</Link></button>
      </div>

    </div>
  );
}

export default Carousals;