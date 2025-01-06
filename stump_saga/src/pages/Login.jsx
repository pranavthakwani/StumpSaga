import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // Add login functionality here
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section className="login-section">
        <Container>
          <Row>
            <Col lg="6" md="8" sm="10" className="mx-auto text-center">
              <Form className="login-form" onSubmit={submitHandler}>
                <FormGroup>
                  <Input
                    type="email"
                    placeholder="Email / Mobile Number"
                    required
                    innerRef={loginNameRef}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    innerRef={loginPasswordRef}
                  />
                </FormGroup>
                <Button type="submit" color="primary" className="login-btn">
                  Login
                </Button>
              </Form>
              <p className="mt-3">
                Don't have an account? <Link to="/register">Create an account</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
