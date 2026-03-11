import React from "react";
import Navbar from "./components/navbar";
import Container from "@/components/container";
import AppPresentation from "./components/app-presentation";

function LandingPage() {
  return (
    <Container className="px-12 pt-8 bg-black bg-fixed text-white min-h-screen 3xl:px-40 2xl:pt-10">
      <Container as={"header"}>
        <Navbar />
      </Container>
      <Container as={"main"} >
        <Container as={"section"}>
          <AppPresentation />
        </Container>
      </Container>
    </Container>
  );
}

export default LandingPage;
