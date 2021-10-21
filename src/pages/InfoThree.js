import React from "react";
import { Container, Col, Figure, Row } from "react-bootstrap";
import img1 from "../images/pictures/motorbikes.jpg";
import img2 from "../images/pictures/antonio.jpg";

function InfoThree() {
  return (
    <Container className="pt-3">
      <Figure>
        <Figure.Image
          src={img1}
          className="img-fluid shadow-4"
          alt="..."
          width="100%"
        />
        <Figure.Caption>
          An array of motorbikes crossing Long Bien Bridge on the Red River in
          Hanoi, Viet Nam. UN Photo/Kibae Park
        </Figure.Caption>
      </Figure>
      <h1>
        WHO Secretary-General's Message for 2020
      </h1>
      <br/>
      <Row>
        <Col md={8}>
          <div className="text-start">
            <h3>Messages</h3>
            <hr/>
            <p>
              Road traffic collisions are a major health and development concern.
              Some 3700 fathers, mothers, brothers, sisters, sons, daughters,
              friends and colleagues are lost on the world’s roads every day. Road
              traffic incidents are the leading cause of death for children and
              young adults between 5 and 29 years old, and ninety percent of victims
              live in low- and middle-income countries.
            </p>
            <p>
              We need to remember this as we resolve to build a strong recovery from
              the COVID-19 pandemic. Our mobility systems must have safety at their
              core. This is the only way we will achieve the ambitious goal of
              halving road deaths and injuries by 2030.
            </p>
            <p>
              The United Nations road safety conventions are key to helping
              countries address the main causes of accidents. I welcome the recent
              General Assembly Resolution that proclaimed a second Decade of Action
              for Road Safety from 2021 to 2030, and urged support for the efforts
              of my Special Envoy for Road Safety and for the United Nations Road
              Safety Fund.
            </p>
            <p>
              As we remember the victims of road traffic collisions, let’s commit to
              reimagining ways to move around the world that are safe, affordable,
              accessible and sustainable for all, everywhere.{" "}
            </p>
          </div>
        </Col>
        <Col md={4}>
          <Figure>
            <Figure.Image
              src={img2}
              className="img-fluid rounded-circle"
              width="175px"
              height="155px"
              alt="..."
            />
            <Figure.Caption>
              "As we remember the victims of road traffic collisions, let’s commit
              to reimagining ways to move around the world that are safe,
              affordable, accessible and sustainable for all, everywhere."
              <br/>-- António Guterres
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <div className="text-start">
        <h2>Harvard Reference</h2>
        <hr/>
        <ol>
          <li>
            Nations, U., 2021. World Day of Remembrance for Road Traffic Victims |
            Messages | United Nations. [online] United Nations. Available at:
            https://www.un.org/en/observances/road-traffic-victims-day/messages    
          </li>
        </ol>
      </div>
    </Container>
  );
}

export default InfoThree;
