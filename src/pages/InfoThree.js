import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../images/pictures/motorbikes.jpg";
import img2 from "../images/pictures/antonio.jpg";

function InfoThree() {
  return (
    <>
      <div className="container">
        <img
          src={img1}
          className="img-fluid shadow-4"
          alt="..."
          style={{ paddingTop: "3px" }}
          width="100%"
        />
        <p>
          An array of motorbikes crossing Long Bien Bridge on the Red River in
          Hanoi, Viet Nam. UN Photo/Kibae Park
        </p>
      </div>

      <Container>
        <h1 style={{ paddingBottom: 30 }}>
          <br />
          WHO Secretary-General's Message for 2020
        </h1>
      </Container>

      <div
        className="text-start"
        style={{ paddingLeft: 150, paddingRight: 150 }}
      >
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

      <div className="container">
        <br />
        <br />
        <img
          src={img2}
          className="img-fluid rounded-circle"
          alt="..."
          style={{ width: 200, height: 200 }}
        />
        <p>
          <br />
          <strong>António Guterres</strong>
        </p>
        <div>
          <p className="container" style={{ width: 400 }}>
            "As we remember the victims of road traffic collisions, let’s commit
            to reimagining ways to move around the world that are safe,
            affordable, accessible and sustainable for all, everywhere."
          </p>
        </div>
      </div>

      <h6 style={{ paddingTop: 30 }}>
        <br />
        <strong>Harvard referencing: </strong>
      </h6>
      <p className="text-start" style={{ paddingLeft: 150, paddingRight: 150 }}>
        Nations, U., 2021. World Day of Remembrance for Road Traffic Victims |
        Messages | United Nations. [online] United Nations. Available at:
        https://www.un.org/en/observances/road-traffic-victims-day/messages
      </p>
    </>
  );
}

export default InfoThree;
