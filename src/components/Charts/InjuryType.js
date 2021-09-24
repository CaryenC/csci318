import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {readString} from 'react-papaparse';
// react-bootstrap components
import {
    Card,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import msiaCSV from '../data/msia-road.csv';
// import jpCSV from '.../data/jp-road.csv';

const msiaSerInjury = [], misaSlInjury = [], jpSerInjury = [], jpSlInjury = [];
var msiaTotalSerious = 0, jpTotalSerious = 0, msiaTotalSlight = 0, jpTotalSlight = 0;

// setting to read Malaysia data
const msiaConfig = {
  complete: (results, file) => {
    console.log("Malaysia");
    for(let i=0; i<20; i++){
      msiaSerInjury[i] = parseInt(results['data'][i]['Serious Injury'].replace(/,/g,''));
      misaSlInjury[i] = parseInt(results['data'][i]['Slight Injury'].replace(/,/g,''));
      msiaTotalSerious = msiaTotalSerious + msiaSerInjury[i];
      msiaTotalSlight = msiaTotalSlight + misaSlInjury[i];
      console.log(i+1);
      console.log(msiaSerInjury[i]);
      console.log(misaSlInjury[i]);
    }
  },
  header: true,
  download: true,
  error: (error, file)=>{
    console.log('Error: ', error, file);
  },
};

// setting to read Japan data
const jpConfig = {
  complete: (results, file) => {
    console.log("Japan");
    for(let i=0; i<=20; i++){
      jpSerInjury[i] = parseInt(results['data'][i]['Serious Injury'].replace(/,/g,''));
      jpSlInjury[i] = parseInt(results['data'][i]['Slight Injury'].replace(/,/g,''));
      jpTotalSerious = jpTotalSerious + jpSerInjury[i];
      jpTotalSlight = jpTotalSlight + jpSlInjury[i];
      console.log(i+1);
      console.log(jpSerInjury[i]);
      console.log(jpSlInjury[i]);
      // console.log(">>>>>>>>>>>");
      // console.log(jpTotalSerious);
      // console.log(jpTotalSlight);
    }
  },
  header: true,
  download: true,
  error: (error, file)=>{
    console.log('Error: ', error, file);
  },
};

readString(msiaCSV, msiaConfig);
readString(jpCSV, jpConfig);
console.log(">>>>>>>>>>>");
console.log(msiaTotalSerious);
console.log(msiaTotalSlight);

function InjuryType() {
//   const [value, setValue] = useState();
  
  const seriousTypeData = {
    labels: ['Malaysia', 'Japan'],
    datasets: [{
      label: 'Serious Injury',
      data: [msiaTotalSerious, jpTotalSerious],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'],
      hoverOffset: 4
    }]
  };

  const slightTypeData = {
    labels: ['Malaysia', 'Japan'],
    datasets: [{
      label: 'Slight Injury',
      data: [msiaTotalSlight, jpTotalSlight],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'],
      hoverOffset: 4
    }]
  };
  
  return (
    <div>
        <Container fluid>
            <Row>
                <Col sm>
                    <Card className="card-stats">
                        <Card.Body>
                            <Card.Title as="h4">Total Serious Injury</Card.Title>
                            <Doughnut data={seriousTypeData} />
                        </Card.Body>
                        <Card.Footer>
                            Serious and Slight Injury Comparison
                        </Card.Footer>
                    </Card>
                </Col>
                <Col sm>
                    <Card className="card-stats">
                    <Card.Body>
                        <Card.Title as="h4">Total Slight Injury</Card.Title>
                        <Doughnut data={slightTypeData} />
                    </Card.Body>
                    <Card.Footer>
                        Serious and Slight Injury Comparison
                    </Card.Footer>
                    </Card>
                </Col>
              </Row>
          </Container>
        </div>
    )
}

export default InjuryType