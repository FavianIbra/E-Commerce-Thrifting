import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Contact from "../components/UI/Contact";
import Belanja from "../components/UI/Belanja";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Belanja />
      <Contact />
    </Fragment>
  );
}
