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



  useEffect(() => {
    const jpConfig = {
      header: true,
      download: true,
      complete: (result, file) => {
        setJapanData(result.data);
        var jpTotalSerious = result.data.reduce(function(prev, cur){ return prev + +cur["Serious Injury"].replace(/,/g,''); }, 0);
        setJapanSerious(jpTotalSerious);
        var jpTotalSlight = result.data.reduce(function(prev, cur){ return prev + +cur["Slight Injury"].replace(/,/g,''); }, 0);
        setJapanSlight(jpTotalSlight);
      },
      error: (error, file) => {
      },
    };
    readString(jpCSV, jpConfig);
  }, []) // second argument should be primitive data

  useEffect(() => {
    const msiaConfig = {
      header: true,
      download: true,
      complete: (result, file) => {
        setMsiaData(result.data);
        
        var msiaTotalSerious = 0, msiaTotalSlight = 0;
        for(let i=0;i<20;i++){
          msiaTotalSerious += parseInt(result.data[i]["Serious Injury"].replace(/,/g,''));
          setMsiaSerious(msiaTotalSerious);
          msiaTotalSlight += parseInt(result.data[i]["Slight Injury"].replace(/,/g,''));
          setMsiaSlight(msiaTotalSlight);
        }
      },
      error: (error, file) => {
      },
    };
    readString(msiaCSV, msiaConfig);
  }, []) // second argument should be primitive data
  
// to filter data with year range
const filterYear = () => {
  
  const newJpData = japanData.filter(data => (data.Year) >= startYear && (data.Year) <= endYear);
  const newJpTotalSerious = newJpData.reduce(function(prev, cur){ return prev + +cur["Serious Injury"].replace(/,/g,''); }, 0); 
  const newJpTotalSlight = newJpData.reduce(function(prev, cur){ return prev + +cur["Slight Injury"].replace(/,/g,''); }, 0);


  // update total serious and slight injuries
  // for both Malaysia and Japan
  setJapanSerious(newJpTotalSerious);
  setJapanSlight(newJpTotalSlight);
  
  
  const newMsiaData = msiaData.filter(data => (data.Year) >= startYear && (data.Year) <= endYear);
  const newMsiaTotalSerious = newMsiaData.reduce(function(prev, cur){ return prev + +cur["Serious Injury"].replace(/,/g,''); }, 0); 
  const newMsiaTotalSlight = newMsiaData.reduce(function(prev, cur){ return prev + +cur["Slight Injury"].replace(/,/g,''); }, 0);


  // update total serious and slight injuries
  // for both Malaysia and Japan
  setMsiaSerious(newMsiaTotalSerious);
  setMsiaSlight(newMsiaTotalSlight);
  
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
            <p>From:</p><select name="year" id="year" onChange={(e)=>setStartYear(e.target.value)}>
              {japanData.map(data => <option value={data.Year}>{data.Year}</option>)}
            </select>
            {/* <input value={startYear} type="text" onChange={(e)=>setStartYear(e.target.value)} /> */}
          </Col>
          <Col>
            
            <p>To:</p><select name="year" id="year" onChange={(e)=>setEndYear(e.target.value)}>
              {japanData.map(data => <option value={data.Year}>{data.Year}</option>)}
            </select>
            {/* <input value={endYear} type="text" onChange={(e)=>setEndYear(e.target.value)} /> */}
          </Col>
        </Row>
      </Card>
    </div>
    )
}

export default InjuryType