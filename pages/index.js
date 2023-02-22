import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Portfolio from "../components/UI/Portfolio";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
