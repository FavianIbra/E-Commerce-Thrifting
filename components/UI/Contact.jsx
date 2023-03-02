import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Service" />
            <h3 className="mt-4 mb-4">Contact Service</h3>
            <p>
            Welcome to our contact service page. We are here to assist you with any questions, 
            issues, or suggestions you have about our services and products. To contact us, you can 
            fill out the contact form below with complete and clear information, and our team will 
            respond to your request within 24 hours.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Favian Ibra Yanuarta - Malang</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>ibra.yanuarta@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+085736902974</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/FavianIbra">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/favian-ibra-572bb7266/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/fvnibra/?hl=id">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
