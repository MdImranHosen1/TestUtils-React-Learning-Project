import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const About = (props) => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <h2>About Us</h2>
                    <p>
                        Welcome to our company! We are a team of passionate individuals
                        dedicated to providing high-quality products/services to our
                        customers.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        at justo ac urna commodo scelerisque ut eget ligula. Morbi non
                        vestibulum enim, a suscipit nibh. Praesent a magna a quam
                        malesuada suscipit ut vel ipsum.
                    </p>
                </Col>
                <Col md={6}>
                    <img
                        src="https://placekitten.com/600/400"
                        alt="Team"
                        className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
    )
}


