import Head from "next/head";
import Image from "next/image";

import AccordionMenu from "../components/Accordion";

import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Navbar";
import Team from "../components/Team";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />
      <Features />
      <AccordionMenu />
      <Team />
      <Footer />
    </div>
  );
}
