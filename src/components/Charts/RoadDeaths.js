import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { readString } from 'react-papaparse';
import dataMsia from '../../data/RDmsiaData.csv';
import dataJpn from '../../data/RDjpnData.csv';
import { Card,Row,Col } from 'react-bootstrap';

// var msiaDeaths = [];
var mMsiaDeaths = [];
var fMsiaDeaths = [];
var country = [];
const yearM = [];

// var jpnDeath = [];
var mJpnDeath = [];
var fJpnDeath = [];
var c = [];
const y = [];

const years =['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];



function RoadDeaths() {
  // const [malaysiaDeaths, setMalaysiaDeaths] = useState([]);
  const [mmalaysiaDeaths, setmMalaysiaDeaths] = useState([]);
  const [fmalaysiaDeaths, setfMalaysiaDeaths] = useState([]);
  // const [japanDeaths, setJapanDeaths] = useState([]);
  const [mjapanDeaths, setmJapanDeaths] = useState([]);
  const [fjapanDeaths, setfJapanDeaths] = useState([]);


  const msia = {
    complete: (results, file) => {
      console.log('Parsing complete: ', results, file);
      console.log('Malaysia');
      for (let i = 0; i < results.data.length-1; i++) {
        country[i] = results.data[i].Country;
        yearM[i] = results.data[i].Year;
        // msiaDeaths[i] = parseInt(results['data'][i]['Estimated number of road traffic deaths (Both sexes)']);
        mMsiaDeaths[i] = parseInt(results['data'][i]['Estimated number of road traffic deaths (Male)']);
        fMsiaDeaths[i] = parseInt(results['data'][i]['Estimated number of road traffic deaths (Female)']);
        // console.log(country[i]);
        // console.log(yearM[i]);
        // console.log(msiaDeaths[i]);
        // console.log(msiaDeaths);
      }

      // msiaDeaths = msiaDeaths.reverse();
      mMsiaDeaths = mMsiaDeaths.reverse();
      fMsiaDeaths = fMsiaDeaths.reverse();
      console.log(results.data.length);
      // setMalaysiaDeaths(msiaDeaths);
      setmMalaysiaDeaths(mMsiaDeaths);
      setfMalaysiaDeaths(fMsiaDeaths);
    },

    header: true,
    download: true,
    error: (error, file) => {
      console.log('Error: ', error, file);
    },
  };


  const j = {
    complete: (results, file) => {
      console.log('Parsing complete: ', results, file);
      console.log('Japan');
      for (let i = 0; i < results.data.length - 1; i++) {
        c[i] = results.data[i].Country;
        y[i] = results.data[i].Year;
        // jpnDeath[i] = parseInt(results['data'][i]['Estimated number of road traffic deaths (Both sexes)']);
        mJpnDeath[i] = parseInt(results['data'][i]['Estimated number of road traffic deaths (Male)']);
        fJpnDeath[i] = parseInt(results['data'][i]['Estimated number of road traffic deaths (Female)']);
        // console.log(c[i]);
        // console.log(y[i]);
        // console.log(jpnDeath[i]);
        // console.log(jpnDeath);
      }
      // jpnDeath = jpnDeath.reverse();
      mJpnDeath = mJpnDeath.reverse();
      fJpnDeath = fJpnDeath.reverse();

      // setJapanDeaths(jpnDeath);
      setmJapanDeaths(mJpnDeath);
      setfJapanDeaths(fJpnDeath);
    },

    header: true,
    download: true,
    error: (error, file) => {
      console.log('Error: ', error, file);
    },
  };

  readString(dataMsia, msia);
  readString(dataJpn, j);

  // console.log(malaysiaDeaths);
  // console.log(japanDeaths);

  const data = {
    labels: years,//['2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','2006',],
    datasets:
      [
        // {
        //   label: "Both Sexes (Malaysia)",
        //   data: malaysiaDeaths,
        //   // data: [1, 2, 3, 4, 100],
        //   fill: false,
        //   lineTension: 0.1,
        //   backgroundColor: "rgba(102,102,255,0.5)",
        //   borderColor: "rgba(74, 255, 196, 1)",
        //   borderCapStyle: "butt",
        //   borderDash: [],
        //   borderDashOffset: 0.0,
        //   borderJoinStyle: "miter",
        //   pointBorderColor: "brown",
        //   pointBackgroundColor: "rgba(74, 255, 196, 1)",
        //   pointBorderWidth: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBackgroundColor: "violet",
        //   pointHoverBorderColor: "green",
        //   pointHoverBorderWidth: 5,
        //   pointRadius: 1,
        //   pointHitRadius: 1
        // },
        {
          label: "Male (Malaysia)",
          data: mmalaysiaDeaths,
          // data: [1, 2, 3, 4, 100],
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(74, 255, 196, 0.5)",
          borderColor: "rgba(74, 255, 196, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "brown",
          pointBackgroundColor: "rgba(74, 255, 196, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "violet",
          pointHoverBorderColor: "green",
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 1
        },
        {
          label: "Female (Malaysia)",
          data: fmalaysiaDeaths,
          // data: [1, 2, 3, 4, 100],
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(102,102,255,0.5)",
          // barPercentage: 2.0,
          borderColor: "rgba(74, 255, 196, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "brown",
          pointBackgroundColor: "rgba(74, 255, 196, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "violet",
          pointHoverBorderColor: "green",
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 1
        },
        // {
        //   label: "Both Sexes (Japan)",
        //   data: japanDeaths,
        //   // data: [5, 4, 3, 2, 1],
        //   fill: false,
        //   lineTension: 0.1,
        //   backgroundColor: "rgba(74, 255, 196, 0.5)",
        //   borderColor: "rgba(74, 255, 196, 1)",
        //   borderCapStyle: "butt",
        //   borderDash: [],
        //   borderDashOffset: 0.0,
        //   borderJoinStyle: "miter",
        //   pointBorderColor: "brown",
        //   pointBackgroundColor: "rgba(74, 255, 196, 1)",
        //   pointBorderWidth: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBackgroundColor: "violet",
        //   pointHoverBorderColor: "green",
        //   pointHoverBorderWidth: 5,
        //   pointRadius: 1,
        //   pointHitRadius: 1
        // },
        {
          label: "Male (Japan)",
          data: mjapanDeaths,
          // data: [5, 4, 3, 2, 1],
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(74, 255, 196, 0.5)",
          borderColor: "rgba(74, 255, 196, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "brown",
          pointBackgroundColor: "rgba(74, 255, 196, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "violet",
          pointHoverBorderColor: "green",
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 1
        },
        {
          label: "Female (Japan)",
          data: fjapanDeaths,
          // data: [5, 4, 3, 2, 1],
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(102,102,255,0.5)",
          borderColor: "rgba(74, 255, 196, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "brown",
          pointBackgroundColor: "rgba(74, 255, 196, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "violet",
          pointHoverBorderColor: "green",
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 1
        }
      ]
  }



  return (

    <Card className="p-3 mb-5">
        
        <Row>
            <Col>
                <Card.Title as="h4">Malaysia and Japan Road Deaths</Card.Title>
                <Bar data={data} />
            </Col>
        </Row>

    </Card>

    // <div>
    //   <h4>Bar Chart - Malaysia and Japan Road Deaths</h4>
    //   <Bar data={data} />
    // </div>

  );
};

export default RoadDeaths;