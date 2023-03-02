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
              <SectionSubtitle subtitle="Thrift Nomor 1. Indonesia" />
              <h2 className="mt-3 mb-3">Enjoy Your Shopping  </h2>
              <h5 className="mb-4">Selamat datang di ThredUp</h5>
              <p>
              website thrift yang berdedikasi untuk mengurangi limbah dan mendukung berbelanja 
              yang lebih berkelanjutan. Kami memilih dengan cermat barang-barang bekas berkualitas 
              yang layak untuk dijual kembali, mulai dari pakaian hingga perabotan rumah tangga, dan menjualnya dengan harga yang terjangkau.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Click Here</Link>
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
