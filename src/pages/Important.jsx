import React from "react";
import Footer from "../components/Footer.jsx";
import Form from "../components/Form.jsx";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
export default function Important() {
  return (
    <>
      <Header />
      <HeroSection
        herosectiontitle="If you don't know what's going on here, then this is'nt the place for you"
        herosectioninfo="fill in the details and go ahead"
      />
      <Form
        emailplaceholder="email"
        passwordplaceholder="password"
        helper="forgot password"
        formbtn="login"
      />
      <Footer/>
    </>
  );
}
