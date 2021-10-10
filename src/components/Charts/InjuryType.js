import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { readString } from 'react-papaparse';
// react-bootstrap components
import {
    Card,
    Row,
    Col,
  } from "react-bootstrap";
import jpCSV from "../../data/jp-road.csv";
import msiaCSV from "../../data/msia-road.csv";

function InjuryType() {
  // to store input start year
  const [msiaData, setMsiaData] = useState([]);
  const [japanData, setJapanData] = useState([]);
  const [japanSerious, setJapanSerious] = useState();
  const [japanSlight, setJapanSlight] = useState();
  const [msiaSerious, setMsiaSerious] = useState();
  const [msiaSlight, setMsiaSlight] = useState();
  // to store input start year
  const [startYear, setStartYear] = useState(1997);
  // to store input end year
  const [endYear, setEndYear] = useState(2016);


  console.log("No. 1");

  useEffect(() => {
    console.log("Inside first useEffect...");
    const jpConfig = {
      header: true,
      download: true,
      complete: (result, file) => {
        console.log('Complete: ', result);
        console.log("Storing japan data to state...");
        setJapanData(result.data);
        console.log("Done storing japan data to state...");
        console.log(japanData);
        console.log("Summing Japan total serious injury...");
        var jpTotalSerious = result.data.reduce(function(prev, cur){ return prev + +cur["Serious Injury"].replace(/,/g,''); }, 0);
        console.log(jpTotalSerious);
        console.log("Done summing Japan total serious injury...");
        console.log("Storing total serious to state...");
        setJapanSerious(jpTotalSerious);
        console.log("Done storing total serious to state...");
        console.log("Summing Japan total slight injury...");
        var jpTotalSlight = result.data.reduce(function(prev, cur){ return prev + +cur["Slight Injury"].replace(/,/g,''); }, 0);
        console.log(jpTotalSlight);
        console.log("Done summing Japan total slight injury...");
        console.log("Storing total slight to state...");
        setJapanSlight(jpTotalSlight);
        console.log("Done storing total slight to state...");
        console.log(japanSlight);
      },
      error: (error, file) => {
        console.log('Error: ', error, file);
      },
    };
    console.log("Processing jpConfig object...");
    console.log(jpConfig);
    console.log("Reading string of jpCSV and jpConfig...");
    readString(jpCSV, jpConfig);
    console.log("Done reading string of jpCSV and jpConfig...");
  }, []) // second argument should be primitive data

  useEffect(() => {
    console.log("Inside second useEffect...");
    const msiaConfig = {
      header: true,
      download: true,
      complete: (result, file) => {
        console.log('Complete: ', result);
        console.log("Storing msia data to state...");
        setMsiaData(result.data);
        console.log("Done storing msia data to state...");
        console.log(msiaData);
        
        var msiaTotalSerious = 0, msiaTotalSlight = 0;
        console.log("Summing Msia total serious injury...");
        for(let i=0;i<20;i++){
          msiaTotalSerious += parseInt(result.data[i]["Serious Injury"].replace(/,/g,''));
          console.log(msiaTotalSerious);
          console.log("Storing total serious to state...");
          setMsiaSerious(msiaTotalSerious);
          msiaTotalSlight += parseInt(result.data[i]["Slight Injury"].replace(/,/g,''));
          console.log(msiaTotalSlight);
          console.log("Storing total slight to state...");
          setMsiaSlight(msiaTotalSlight);
        }
        console.log("Done storing total serious to state...");
        console.log(msiaSerious);
        console.log("Done storing total slight to state...");
        console.log(msiaSlight);
      },
      error: (error, file) => {
        console.log('Error: ', error, file);
      },
    };
    console.log("Processing msiaConfig object...");
    console.log(msiaConfig);
    console.log("Reading string of msiaCSV and msiaConfig...");
    readString(msiaCSV, msiaConfig);
    console.log("Done reading string of msiaCSV and msiaConfig...");
  }, []) // second argument should be primitive data
  
// to filter data with year range
const filterYear = () => {
  
  const newJpData = japanData.filter(data => (data.Year) >= startYear && (data.Year) <= endYear);
  const newJpTotalSerious = newJpData.reduce(function(prev, cur){ return prev + +cur["Serious Injury"].replace(/,/g,''); }, 0); 
  const newJpTotalSlight = newJpData.reduce(function(prev, cur){ return prev + +cur["Slight Injury"].replace(/,/g,''); }, 0);

  console.log(newJpTotalSerious); 
  console.log(newJpTotalSlight);

  // update total serious and slight injuries
  // for both Malaysia and Japan
  setJapanSerious(newJpTotalSerious);
  setJapanSlight(newJpTotalSlight);
  
  console.log(japanSerious); 
  console.log(japanSlight);
  
  const newMsiaData = msiaData.filter(data => (data.Year) >= startYear && (data.Year) <= endYear);
  const newMsiaTotalSerious = newMsiaData.reduce(function(prev, cur){ return prev + +cur["Serious Injury"].replace(/,/g,''); }, 0); 
  const newMsiaTotalSlight = newMsiaData.reduce(function(prev, cur){ return prev + +cur["Slight Injury"].replace(/,/g,''); }, 0);

  console.log(newMsiaTotalSerious); 
  console.log(newMsiaTotalSlight);

  // update total serious and slight injuries
  // for both Malaysia and Japan
  setJapanSerious(newMsiaTotalSerious);
  setJapanSlight(newMsiaTotalSlight);
  
  console.log(msiaSerious); 
  console.log(msiaSlight);
}

  useEffect(() => {
    filterYear();
  }, [startYear, endYear])

  // to store serious injury data 
  // for displaying on graph
  const seriousTypeData = {
    labels: ['Malaysia', 'Japan'],
    datasets: [{
      label: 'Serious Injury',
      data: [msiaSerious, japanSerious], // [10, 12],
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
      data: [msiaSlight, japanSlight], // [10, 12], 
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'],
      hoverOffset: 4
    }]
  };

  return (
    <div>
      <Card className="p-3 mb-5">
        <Row>
          <Col>
              <Card.Body>
                  <Card.Title as="h4">Total Serious Injury</Card.Title>
                  <Doughnut data={seriousTypeData} />
              </Card.Body>
          </Col>
          <Col>
              <Card.Body>
                  <Card.Title as="h4">Total Slight Injury</Card.Title>
                  <Doughnut data={slightTypeData} />
              </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>From:</p>
            <input value={startYear} type="text" onChange={(e)=>setStartYear(e.target.value)} />
          </Col>
          <Col>
            <p>To:</p>
            <input value={endYear} type="text" onChange={(e)=>setEndYear(e.target.value)} />
          </Col>
        </Row>
      </Card>
    </div>
    )
}

export default InjuryType