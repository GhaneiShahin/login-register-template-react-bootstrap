import React from "react";
import { Card, InputGroup, FormControl, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Card style={{ width: "30rem", margin: "0 auto" }} className="mt-5">
      <Card.Body>
        <Card.Title className="text-center text-danger">Sign up</Card.Title>
        <Card.Body>
          <Col className="align-items-center">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Fullname
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="your fullname"
              />
            </InputGroup>
            <br />
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  E-Mail
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="example@mail.com"
              />
            </InputGroup>
            <br />
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Password
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="your Password"
              />
            </InputGroup>
            <br />
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Password Confirm
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="repeat your password"
              />
            </InputGroup>
            <br />
            <div className="d-flex justify-content-center">
              <Button variant="success" className="mb-4">
                Register
              </Button>
            </div>
          </Col>
        </Card.Body>
        <Link to="/">
          <Button variant="outline-info" className="btn-sm mr-3">
            Already have an account?
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Register;
