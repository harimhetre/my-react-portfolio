import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={prof.avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <div className="d-flex">
                <span
                  className="iconify mt-1 avatar-sm"
                  data-icon="logos:whatsapp"
                  data-inline="false"
                >
                </span>
                <p className="text-white ml-2 font-size-30px">+919503950422</p>
              </div>
              <div className="d-flex">
                <span
                  className="iconify mt-1 avatar-sm"
                  data-icon="logos:google-gmail"
                  data-inline="false"
                >
                </span>
                <p className="text-white ml-2 font-size-30px">hari.mhetre33@gmail.com</p>
              </div>
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                ALL
              </p>
              <p className="text-white mt-3">{prof.bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
