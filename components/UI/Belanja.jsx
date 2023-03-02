import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/belanja.module.css";
import BelanjaItem from "./BelanjaItem";
import belanjaData from "../data/belanja";

const Belanja = () => {
  const [filter, setFilter] = useState("Mobile App");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData = belanjaData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web Design") {
      const filteredData = belanjaData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="belanja">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My portfolio site" />
            <h4 className="mt-4">Showcasing my work and team projects</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Mobile App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Mobile App")}
              >
                Project Design
              </button>
              
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <BelanjaItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Belanja;
