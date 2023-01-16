import React from "react";
import { Button, Card } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <Card className="text-black">
        <Card.Img
          src="https://images.pexels.com/photos/12701956/pexels-photo-12701956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/100px270"
          alt="Card image"
        />
        <Card.ImgOverlay className="m-5 p-5">
          <Card.Title className="fw-bold">AUTOS & TRANSPORTATION</Card.Title>
          <Card.Text>
            The mission of the Automotive Working Group is to develop Open Web
            Platform specifications for application developers, enabling Web
            connectivity through in-vehicle infotainment systems and vehicle
            data access protocols.
          </Card.Text>

          <Button variant="success" size="sm">CONTACT US</Button>{' '}

          <form className="text-black m-1 p-2">
            <p className="m-2">Professional services</p>
            <h3 className="fw-bold">Get Your Transport Quote</h3>
            <input type="text" placeholder="Loaction" />
            <br /> <br />
            <input type="text" placeholder="To Destination" />
            <br /> <br />
            <input type="text" placeholder="Email" />
            <br /> <br />
            <input type="text" placeholder="Contact Number" />
            <br /> <br />
            <Button variant="dark" size="sm">GET NEW QUOTE</Button>
          </form>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Hero;
