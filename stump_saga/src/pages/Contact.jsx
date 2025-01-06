import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Helmet title="Contact Us">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="10" className="mx-auto">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
