import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { readString } from 'react-papaparse';
// react-bootstrap components
import {
    Card,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import msiaCSV from './msia-road.csv';
import jpCSV from './jp-road.csv';

function InjuryType() {
  // to store input start year
  const [startYear, setStartYear] = useState(1997);
  // to store input end year
  const [endYear, setEndYear] = useState(2017);

  // to store Malaysia road data
  const [msiaData, setMsiaData] = useState([]);
  const [jpData, setJpData] = useState([]);

  // to store total serious injury data
  const [msiaTotalSerious, setMsiaTotalSerious] = useState(0);
  const [jpTotalSerious, setJpTotalSerious] = useState(0);
  // to store total slight injury data
  const [msiaTotalSlight, setMsiaTotalSlight] = useState(0);
  const [jpTotalSlight, setJpTotalSlight] = useState(0);

  // to set PapaParse configuration
  const msiaConfig = {
    header: true,
    download: true,
    complete: (result, file) => {
      setMsiaData(result.data);
    },
    error: (error, file)=>{
      console.log('Error: ', error, file);
    },
  };
  
  const jpConfig = {
    header: true,
    download: true,
    complete: (result, file) => {
      setJpData(result.data);
    },
    error: (error, file)=>{
      console.log('Error: ', error, file);
    },
  };

  // to filter data with year range
  const filterYear = (msiaData, jpData) => {
    const newMsiaData = msiaData.filter(data => (data.Year) >= startYear && (data.Year) <= endYear);
    const newJpData = jpData.filter(data => (data.Year) >= startYear && (data.Year) <= endYear);
    const newMsiaTotalSerious = newMsiaData.reduce(function(prev, cur){ return prev + +cur["Serious Injury"].replace(/,/g,''); }, 0); 
    const newMsiaTotalSlight = newMsiaData.reduce(function(prev, cur){ return prev + +cur["Slight Injury"].replace(/,/g,''); }, 0); 
    const newJpTotalSerious = newJpData.reduce(function(prev, cur){ return prev + +cur["Serious Injury"].replace(/,/g,''); }, 0); 
    const newJpTotalSlight = newJpData.reduce(function(prev, cur){ return prev + +cur["Slight Injury"].replace(/,/g,''); }, 0);

    // update Malaysia and Japan data
    setMsiaData(newMsiaData);
    setJpData(newJpData);
    
    // update total serious and slight injuries
    // for both Malaysia and Japan
    setMsiaTotalSerious(newMsiaTotalSerious);
    setMsiaTotalSlight(newMsiaTotalSlight);
    setJpTotalSerious(newJpTotalSerious);
    setJpTotalSlight(newJpTotalSlight);
    
    // to see if data is set
    console.log(newMsiaTotalSerious); 
    console.log(newMsiaTotalSlight);
    console.log(newJpTotalSerious); 
    console.log(newJpTotalSlight); 
  }

  // to render CSV reading
  // and the data filtering function
  // on the web application
  useEffect(() => {
    readString(msiaCSV, msiaConfig);
    readString(jpCSV, jpConfig);
    filterYear(msiaData, jpData);
  }, [startYear, endYear]) // second argument should be primitive data

  // to store serious injury data 
  // for displaying on graph
  const seriousTypeData = {
    labels: ['Malaysia', 'Japan'],
    datasets: [{
      label: 'Serious Injury',
      data: [msiaTotalSerious, jpTotalSerious], // [10, 12],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'],
      hoverOffset: 4
    }]
  };

  // to store slight injury data 
  // for displaying on graph
  const slightTypeData = {
    labels: ['Malaysia', 'Japan'],
    datasets: [{
      label: 'Slight Injury',
      data: [msiaTotalSlight, jpTotalSlight], // [10, 12], 
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'],
      hoverOffset: 4
    }]
  };
  
  return (
    <div>
        <Container>
            <Row>
                <Col sm>
                    <Card className="card-stats">
                        <Row>
                            <Col sm>
                                <Card.Body>
                                    <Card.Title as="h4">Total Serious Injury</Card.Title>
                                    <Doughnut data={seriousTypeData} />
                                </Card.Body>
                            </Col>
                            <Col sm>
                                <Card.Body>
                                    <Card.Title as="h4">Total Slight Injury</Card.Title>
                                    <Doughnut data={slightTypeData} />
                                </Card.Body>
                            </Col>
                        </Row>
                        <Row>
                          <Col xs>
                            <p>From:</p>
                            <input type="text" onChange={(e)=>setStartYear(e.target.value)} />
                          </Col>
                          <Col xs>
                            <p>To:</p>
                            <input type="text" onChange={(e)=>setEndYear(e.target.value)} />
                          </Col>
                          <p>Year starts from {startYear}.</p>
                          <p>Year ends at {endYear}.</p>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default InjuryType