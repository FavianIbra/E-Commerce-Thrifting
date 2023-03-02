import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
     <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="8" md="8">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Favian Ibra Yanuarta</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
              Nama saya adalah Favian dan saya tinggal di Kota Malang, Jawa Timur, Indonesia.
              Saya adalah Software Engineer yang sedang menempuh pendidikan di SMK Telkom Malang.
              Saya duduk di bangku kelas 11 dengan pengambilan jurusan RPL 
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://github.com/FavianIbra">Github</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}

        
          <Col lg="4" md="4">
            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/sweater.jpg"
                    width="2752"
                    height="2752"
                    className=" rounded-2"
                  />
                </div>
              </div>
                  <div className={`${classes.testimonial__item}`}>
                  <div className={`${classes.testimonial__client}`}>
                    <Image
                      alt="client-img"
                      src="/images/sweater2.jpg"
                      width="2752"
                      height="2752"
                      className=" rounded-2"
                    />
                    </div>
                  </div>
                  <div className={`${classes.testimonial__item}`}>
                    <div className={`${classes.testimonial__client}`}>
                      <Image
                      alt="client-img"
                      src="/images/sweater3.jpg"
                      width="2752"
                      height="2752"
                      className=" rounded-2"
                      />
                      </div>
                </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
