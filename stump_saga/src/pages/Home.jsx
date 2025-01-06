import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, Button } from "reactstrap";
import Category from "../components/UI/category/Category.jsx";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import upcomingTournaments from "../assets/fake-data/UpcomingTournaments.js";
import testimonialImg from "../assets/images/testimonial.jpg";

const Home = () => {
  const [upcomingTournamentData, setUpcomingTournamentData] = useState([]);

  useEffect(() => {
    // Simulate fetching upcoming tournaments data from backend
    // Replace this with your actual API call
    setUpcomingTournamentData(upcomingTournaments);
  }, []);

  return (
    <Helmet title="Home">
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero-content">
                <h1 className="hero-title">
                  Welcome to <span>Stump Saga Cricket League</span>
                </h1>
                <p className="hero-subtitle">
                  Explore the exciting world of cricket leagues and tournaments.
                </p>
                <Button tag="Link" to="/grounds" className="order-btn">
                  Book Ground
                </Button>
                <Button tag="Link" to="/tournaments" className="view-tournaments-btn">
                  View Tournaments
                </Button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero-image">
                <img src="https://via.placeholder.com/600x400" alt="Cricket" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="category-section">
        <Category />
      </section>

      <section className="products-section">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="section-title">Featured Cricket Grounds</h2>
            </Col>
            {/* Render product cards */}
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" key={item.id} className="mt-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="upcoming-tournaments-section">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="section-title">Upcoming Tournaments</h2>
            </Col>
            {/* Render upcoming tournaments */}
            {upcomingTournamentData.map((tournament) => (
              <Col lg="3" md="4" sm="6" key={tournament.id} className="mt-4">
                <ProductCard item={tournament} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="testimonial-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial-content">
                <h2 className="testimonial-title">What Our Players Say</h2>
                <p className="testimonial-description">
                  "Stump Saga Cricket League provides an amazing platform for cricket enthusiasts
                  to showcase their talent and passion for the sport. Highly recommended!"
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={testimonialImg} alt="Testimonial" className="testimonial-image" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
