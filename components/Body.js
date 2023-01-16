import React from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import SecurityIcon from '@mui/icons-material/Security';

const Body = () => {
  return (
    <>
      <Container className="m-5 p-4 text-center">
        <h4>WELCOME TO DENSO TRANSPORT</h4>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          doloribus quisquam quod vel maxime obcaecati voluptatibus accusantium
          ipsum tempore? Saepe mollitia hic quae blanditiis porro quaerat
          similique, accusamus nisi quibusdam modi aut, ratione earum
          consectetur! Repudiandae odit deserunt, adipisci nulla voluptatibus
          totam numquam ab, iure aliquam ipsa harum autem rem?
        </p>

        <h4 className="mt-5 p-1 text-center">SERVICES</h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto,
          voluptatibus vel doloribus consequuntur reiciendis.
        </p>

        <div className="m-5">
          <FlightIcon className="m-3" fontSize="large"/>
          <DirectionsSubwayIcon className="m-3" fontSize="large"/>
          <LocalShippingIcon className="m-3" fontSize="large"/>
          <StoreIcon className="m-3" fontSize="large"/>
          <SecurityIcon className="m-3" fontSize="large"/>

        </div>


        <div  className="mt-5">
        <Button variant="dark" size="sm">
          READ MORE
        </Button>

        </div>


        
      </Container>

      <Container className="flex-container">
        <div className="flex-child">
          <h4>ABOUT TRANSPORT</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            dolor maiores non veritatis molestiae voluptates repudiandae libero
            vitae sit soluta nisi tenetur exercitationem illum totam ex,
            officiis velit fugit placeat quasi hic distinctio amet. Ea neque
            libero ab odio veniam!
          </p>
          <Button variant="dark" size="md">
            Dark
          </Button>
        </div>

        <div className="flex-child">
          <img
            src="https://images.pexels.com/photos/1443894/pexels-photo-1443894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="flight"
            width="50%"
          />
        </div>
      </Container>

      <Container>
        <h4 className="text-center mt-5 p-3">LATEST NEWS AND EVENTS</h4>

        <CardGroup>
          <Card className="m-1">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height="60%"
            />
            <Card.Body>
              <Card.Title>LIBERALISATION AIR CARGO INDUSTRY</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                tenetur maxime sit debitis at, ullam inventore provident aperiam
                voluptatum facilis laboriosam, totam cum sunt nihil dolorum
                nobis autem earum amet explicabo nostrum impedit repudiandae
                voluptatibus odit quia. Architecto maxime dolorum odit ad harum.
                Nisi ab nihil enim expedita mollitia vitae?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-1">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/730778/pexels-photo-730778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height="60%"
            />
            <Card.Body>
              <Card.Title>NEW WAREHOUSE NOW OPERATIONAL</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                tenetur eveniet itaque. Qui maiores voluptate libero, asperiores
                architecto repellendus quidem quae. Error magnam aperiam esse
                accusantium eligendi, similique fugiat culpa dolor porro,
                exercitationem ipsum nam placeat, ratione autem sapiente sit
                temporibus maxime earum illo! Ipsum quibusdam ullam similique
                delectus est.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-1">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height="60%"
            />
            <Card.Body>
              <Card.Title>NEW TRUCKS ARRIVING</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati repudiandae, molestias optio suscipit ipsum recusandae
                aspernatur ipsa asperiores vitae! Placeat ipsum labore inventore
                totam dolor perspiciatis officiis eveniet. Eum minus velit autem
                at sapiente assumenda qui ipsum quos, fugiat, neque alias labore
                aut. Dolorem dolorum est consequuntur maiores facilis quibusdam?
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>

      <div className="text-center m-4 p-2">
        <Button variant="dark" size="sm">
          Read More
        </Button>
      </div>

      <Container>
        <h4 className="text-center text-text-black mt-4 p-3">Testimonial</h4>

        <CardGroup>
          <Card className="h-50">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              height="600px"
              width="50px"
            />
            <Card.Body>
              <Card.Title>Alley</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                quo earum sunt natus! Accusamus incidunt debitis illo beatae
                esse sunt, asperiores sed consequatur. Asperiores accusamus ab
                eos hic aliquid labore ut est eaque architecto, exercitationem
                dolorem minima dolorum magnam nostrum.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="h-50">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
              height="600px"
              width="50px"
            />
            <Card.Body>
              <Card.Title>Peter</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                labore iure ad quos consectetur veniam, atque voluptatem sequi,
                tempore incidunt doloremque ipsa assumenda aspernatur molestiae
                magni, repellendus qui corporis accusantium. Ullam quae quasi
                aliquid accusamus adipisci. Beatae harum at reiciendis.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>

      <Container>
        <div className="text-center mt-5">
          <h4>REQUEST A CALLBACK</h4>
        </div>
        <div className="custom02">
          <form className="text-center mt-4"> 
            <input type="text" name="text" placeholder="Name" id="" className="mt-4" />
            <br />
            <br />
            <input type="text" name="text" placeholder="Email" id="" />
            <br />
            <br />
            <input type="text" name="text" placeholder="Phone Number" id="" />
            <br />
            <br />
            <br />
            <br />
          <textarea name="textarea" id="" cols="23" rows="5" placeholder="Message"/>
            <br />
          </form>

        </div>
        
          <div className="text-center">
            <Button className="rounded-pill bg-warning" size="md">Send</Button>{' '}

            </div>
      </Container>
    </>
  );
};

export default Body;
