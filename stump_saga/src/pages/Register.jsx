import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const signupFirstNameRef = useRef();
  const signupLastNameRef = useRef();
  const signupMobileNumberRef = useRef();
  const signupPasswordRef = useRef();
  const signupRETypePasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // Add signup functionality here
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section className="signup-section">
        <Container>
          <Row>
            <Col lg="6" md="8" sm="10" className="mx-auto text-center">
              <Form className="signup-form" onSubmit={submitHandler}>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="First Name"
                    required
                    innerRef={signupFirstNameRef}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    required
                    innerRef={signupLastNameRef}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Mobile Number"
                    required
                    innerRef={signupMobileNumberRef}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    innerRef={signupEmailRef}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    required
                    innerRef={signupPasswordRef}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="RE-Type Password"
                    required
                    innerRef={signupRETypePasswordRef}
                  />
                </FormGroup>
                <Button type="submit" color="primary" className="signup-btn">
                  Sign Up
                </Button>
              </Form>
              <p className="mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
