import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../images/pictures/Irankidsphoto.png";

function InfoOne() {
  return (
    <Container className="pt-3">
      <div className="container">
        <img
          src={img1}
          className="img-fluid shadow-4"
          alt="..."
          width="100%"
        />
      </div>

      
        <h1 style={{ paddingTop: 50 }}>
          Campaign launched to make 30 km/h streets the norm for cities
          worldwide
        </h1>
      

      <div
        className="text-start"
        // style={{ paddingLeft: 150, paddingRight: 150 }}
      >
        <p>
          <br />
          <strong>Streets for Life: Why #Love30?</strong>
          <br />
        </p>
        <p>
          Low speed streets save lives and are the heart of any community. 30
          km/h (20 mph) speed limits where people and traffic mix make for
          streets that are safe, healthy, green and liveable, in other words,
          streets for life. The 6<sup>th</sup> UN Global Road Safety Week is
          calling on policymakers to act for low speed streets worldwide,
          limiting speeds to 30 km/h where people walk, live and play. Join the
          #Love30 campaign to call for 30 km/h speed limits to be the norm for
          cities, towns and villages worldwide.
        </p>
        <p>
          <br />
          <strong>What are the benefits of 30 km/h streets?</strong>
          <br />
        </p>
        <p>
          <em>30 km/h streets are safe and healthy.</em>
        </p>
        <p>
          30 km/h streets protect all who use them, but especially the most
          vulnerable, like pedestrians, cyclists, children and older people and
          people with disabilities. 30 km/h streets where people and traffic mix
          help prevent road traffic deaths and promote physical activity,
          because when streets are safe, people walk and cycle more.
          &nbsp;&nbsp;&nbsp;
          <br />
        </p>
        <p>
          <em>30 km/h streets are green.</em>
        </p>
        <p>
          30 km/h streets are vital in efforts to shift to zero-carbon mobility.
          Streets that promote safe walking and cycling can reduce car
          dependency and harmful vehicle emissions that contribute to climate
          change. To protect the environment, people need safe, low-speed
          streets that encourage sustainable transport choices.
        </p>
        <p>
          <em>30 km/h streets are liveable. </em>
        </p>
        <p>
          Liveable streets, made possible by low speeds, are at the heart of the
          2030 Agenda for Sustainable Development, and can facilitate many of
          its targets. As we build back better from the COVID-19 pandemic,
          everyone should benefit from low speed streets, so that they not only
          survive, but also hrive. 30 km/h streets where people and traffic mix
          are streets for life.
          <br />
        </p>
        <p>
          Join the 6<sup>th</sup> UN Global Road Safety Week to help garner
          policy commitments at national and local levels to deliver 30 km/h
          speed limits in urban areas; generate local support for these speed
          measures in order to create safe, healthy, green and liveable cities;
          and build momentum towards the launch of the Global Plan for the
          Decade of Action for Road Safety 2021-2030 and the High-Level Meeting
          of the UN General Assembly in 2022.&nbsp;
        </p>
        <h6>
          <br />
          <strong>Harvard referencing: </strong>
        </h6>
        <p>
          Who.int. 2021. Campaign launched to make 30 km/h streets the norm for
          cities worldwide. [online] Available at:
          https://www.who.int/news/item/22-03-2021-campaign-launched-to-make-30-km-h-streets-the-norm-for-cities-worldwide{" "}
        </p>
      </div>
    </Container>
  );
}

export default InfoOne;
