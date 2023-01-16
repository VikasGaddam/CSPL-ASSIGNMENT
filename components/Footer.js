import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PlaceIcon from '@mui/icons-material/Place';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import FlightIcon from '@mui/icons-material/Flight';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <Container fluid className="mt-4">
        <Card className="bg-black text-white">
          <Card.Footer className="d-flex justify-content-evenly">
            <div><AddIcCallIcon fontSize="large" className="me-2"/>Call Now +01 1234567890</div>
            <div><PlaceIcon fontSize="large" className="me-2"/>Location</div>
            <div><MarkEmailUnreadIcon fontSize="large" className="me-2"/>demo@gmail.com</div>
          </Card.Footer>
        </Card>
      </Container>

      <Container fluid className="mt-2 text-white bg-success">
        <Row>
          <Col>
          
            <h3 className="fw-bold">DENSO</h3>
            <FlightIcon fontSize="large"/>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae doloribus aperiam unde eligendi perspiciatis nostrum
              pariatur fuga asperiores debitis suscipit reprehenderit fugit
              voluptate laudantium illum, explicabo assumenda omnis facere
              placeat totam quis? Obcaecati necessitatibus blanditiis, expedita
              dolorum eveniet facilis quae doloribus perspiciatis accusamus nisi
              voluptas voluptatibus dignissimos dolores officiis a.
            </p>

            <div>
            <FacebookIcon  className="me-4"/>
            <TwitterIcon className="me-4"/>
            <LinkedInIcon className="me-4"/>
            <InstagramIcon className="me-4"/>
            </div>


            
          </Col>

          <Col>
            <h6 className="d-flex justify-content-evenly">
              <div className="m-2">
                <span className="fw-bold">Information</span>
                
                <br />
                <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione eum consectetur molestias facere deleniti vero
                  temporibus ipsam ipsa similique ea.
                </p>
              </div>
              <div  className="m-2">
                <span className="fw-bold">Helpful Links</span>
                <br />
                <br />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, minus molestias dolor consequuntur ullam laudantium
                  possimus esse animi sit laborum.
                </p>
              </div>
              <div  className="m-2">
              <span className="fw-bold">Supported</span>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  labore culpa alias temporibus quod voluptates deserunt itaque
                  ea illo molestias?
                </p>
              </div>
            </h6>
          </Col>
        </Row>
      </Container>

      <Container fluid>

      <Card.Footer className="text-center bg-black text-white mt-2">
          @ 2019 All Rights Reserved.
        </Card.Footer>

        
      </Container>
    </>
  );
};

export default Footer;
