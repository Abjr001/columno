import React from "react";
import Navbar from "./components/navbar";
import Container from "@/components/generals/container";
import AppPresentation from "./components/app-presentation";

function LandingPage() {
  return (
    <Container as={"div"} className="bg-black bg-fixed">
      <Container className="px-6 pt-6 md:px-12 text-white min-h-screen flex flex-col 2xl:px-40 3xl:px-60 4xl:w-3/4 4xl:mx-auto 2xl:pt-6">
        <Container as={"header"}>
          <Navbar />
        </Container>
        <Container className="flex-1 flex items-center" as={"main"}>
          <Container as={"section"} className="w-full">
            <AppPresentation />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default LandingPage;
