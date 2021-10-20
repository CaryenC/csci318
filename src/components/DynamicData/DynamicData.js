import React, { useEffect, useState } from "react";
import { Alert, Badge, Col, Container, Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

const DynamicData = () => {
  const errorText = "Something is wrong, Please try again later.";
  const errorMalaysiaData =
    "Sorry, unable to fetch Malaysia's data from the service.";
  const errorJapanData =
    "Sorry, unable to fetch Malaysia's data from the service.";

  const URLmy = `https://apii.worldbank.org/v2/country/my/indicator/SH.STA.TRAF.P5?date2010:2019&format=json`;
  const URLjp = `https://api.worldbank.org/v2/country/jp/indicator/SH.STA.TRAF.P5?date2010:2019&format=json`;

  const [myData, setMyData] = useState([]);
  const [jpData, setJpData] = useState([]);

  const [isMyLoaded, setIsMyLoaded] = useState(false);
  const [isJpLoaded, setIsJpLoaded] = useState(false);

  let malaysiaData = [];
  let japanData = [];
  let year = [];

  const dynamicData = {
    labels: year,
    datasets: [
      {
        type: "line",
        label: "MY LINE",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        fill: false,
        data: malaysiaData,
      },
      {
        type: "line",
        label: "JP LINE",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
        data: japanData,
      },
      {
        type: "bar",
        label: "MY BAR",
        backgroundColor: "rgb(255, 99, 132)",
        data: malaysiaData,
        borderColor: "white",
        borderWidth: 1,
      },

      {
        type: "bar",
        label: "JP BAR",
        backgroundColor: "rgb(75, 192, 192)",
        data: japanData,
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    fetch(URLmy)
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw new Error("ERROR with Fetch Operation");
        }
      })
      .then((res) => res.json())
      .then((result) => {
        setIsMyLoaded(true);
        setMyData(result[1]);
      })
      .catch((error) => {
        console.log("ERROR with Fetch Operation:", error);
        setIsMyLoaded(false);
      });
  }, [URLmy]);

  useEffect(() => {
    fetch(URLjp)
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw new Error("ERROR with Fetch Operation");
        }
      })
      .then((res) => res.json())
      .then((result) => {
        setIsJpLoaded(true);
        setJpData(result[1]);
      })
      .catch((error) => {
        console.log("ERROR with Fetch Operation:", error);
        setIsJpLoaded(false);
      });
  }, [URLjp]);

  if (isMyLoaded) {
    myData.map((item) =>
      (function () {
        if (item.value !== null) {
          malaysiaData.unshift(item.value);
          year.unshift(item.date);
        }
      })()
    );
  }

  if (isJpLoaded) {
    jpData.map((item) =>
      (function () {
        if (item.value !== null) {
          japanData.unshift(item.value);
        }
      })()
    );
  }

  if (!isMyLoaded && isJpLoaded) {
    jpData.map((item) =>
      (function () {
        if (item.value !== null) {
          year.unshift(item.date);
        }
      })()
    );
  }

  return (
    <Container className="m-3" fluid>
      <Alert variant="success">
        <span style={{ color: "red", fontSize: "16px", fontWeight: "800" }}>
          LIVE &nbsp;
        </span>
        Data for mortality caused by road traffic injury
      </Alert>
      <Row>
        <Col sm>
          {!isMyLoaded && <Badge bg="danger">{errorMalaysiaData}</Badge>}
        </Col>
        <Col sm>
          {!isJpLoaded && <Badge bg="danger">{errorJapanData}</Badge>}
        </Col>
      </Row>
      {!dynamicData && <Badge bg="danger">{errorText}</Badge>}

      {dynamicData && <Bar data={dynamicData} />}
    </Container>
  );
};

export default DynamicData;
