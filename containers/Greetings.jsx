import React, { useEffect } from "react";
import { greetings } from "../portfolio";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    {greetings.title + " "}
                  </h1>
                  <p className="lead text-white">{greetings.description}</p>
                  <div className="d-flex">
                    <span
                      className="iconify mt-1"
                      data-icon="logos:whatsapp"
                      data-inline="false"
                    ></span>
                    <p className="text-white ml-2	">
                      +919503950422
                    </p>
                  </div>
                  <div className="d-flex">
                    <span
                      className="iconify mt-1"
                      data-icon="logos:google-gmail"
                      data-inline="false"
                    ></span>
                    <p className="text-white ml-2">
                      hari.mhetre33@gmail.com
                    </p>
                  </div>
                  <SocialLinks />
                  {/* <div className="btn-wrapper my-4">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      href={greetings.resumeLink}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-file" />
                      </span>
                      <span className="btn-inner--text">See My Resume</span>
                    </Button>
                  </div> */}
                </Col>
                <Col lg="6">
                  <GreetingLottie animationPath="https://assets4.lottiefiles.com/packages/lf20_qlalnbpt.json" />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
