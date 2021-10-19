import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import img1 from '../images/pictures/roadSafety.jpg';
import img2 from '../images/pictures/roadAccidents.png';
import img3 from '../images/pictures/roadFacilities.png';
import {Card,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'react-bootstrap/Image'

function InfoTwo() {
    return (
    <>

        <div className="container">
        <img src={img1} className='img-fluid shadow-4' alt='...' style={{ paddingTop: 50}} />
        </div>

        <Jumbotron >
            <Container>
                <h1>
                <br/>Road Safety Plan (2021-2030)
                </h1>
            </Container>
        </Jumbotron>
        
        <div className="text-start" style={{ paddingLeft: 150, paddingRight: 150}}>
        <p>Road Safety Plan of Malaysia 2014-2020 (RSPM 2014-2020) has been formulated to address all matters related to road safety in the country will be end soon. Currently, the Road Safety Plan of Malaysia 2021-2030 is in progress on development. A series of workshop will be held to assess the achievement and difficulties encountered in the implementation of the previous road safety plan. The Road Safety Plan of Malaysia 2021-2030 is also a rolling plan and will be continuously adjusted to achieve the goal of reducing deaths and injuries from road accidents.</p>
        <p>New RSPM 2021-2030 will conclude and streamline with National Policy Plan of Malaysia 2019-2030 (NPPM 2019-2030). RSPM 2021-2030 will be implemented according to the third pillar of NPPM 2019-2030 – Policy Thrust 3: Enhance safety, integration, connectivity and accessibility for seamless journey for passenger and goods. The framework of RSPM 2021-2030 was developed based on the five road safety pillars which are Road Safety Management, Safer Mobility and Roads, Safer Vehicles, Safer road Users and Post-Crash Management as recommended in Decade of Actions for Road Safety by World Health Organization (WHO).</p>
        <h5><strong><br/>Road Safety Regulation in Malaysia</strong></h5>
        <p>Road safety regulations in Malaysia include speed limit, seatbelt wearing, helmet wearing, and a maximum BAC level. For example, speed limits in urban areas range from 50km/h to 80km/h and rural areas between 70km/h and 110km/h. Seatbelt wearing is compulsory for all private vehicle occupants. At the same time, helmet wearing in motorcycles has been compulsory since 1973. Currently, the Malaysian Government is in the process of amending the Road Transport Act 1987 for the BAC level in Malaysia to meet the international standard of 0.05g.dl as recommended by the World Health Organisation (WHO). The use of Child Restraint System (CRS) in private vehicles in Malaysia was implemented in January 2020 and must comply with the UN Regulation standard – R44 and R129.​</p>
        <h5><strong><br/>Road Accidents and Fatalities in Malaysia</strong></h5>
        <h5>Road Crash Data Tracking and Collection</h5>
        <p>There are two types of crash data collection in terms of method to track road crash and fatalities. One that is the authorized-based by the Royal Malaysian Police (RMP) and another which is research-based by the Malaysian Institute of Road Safety Research (MIROS). Investigation by RMP serves legal purposes grounded by the Road Transport Act 1987 and covers all level of crash severity on the spot. The research-based approach by MIROS identifies crash and injury factors consisting of human, engineering and environmental aspects, conducted by two criteria, retrospective and on the spot.</p>
        <p>The number of road accident in Malaysia is increased during last ten years (Figure 1). Meanwhile, the number of fatalities has been a steady reduction from peaked at 7,152 in 2016 and showed the lowest number at 6,167 in 2019 during the last ten years (Figure 2).</p>
        <br/>
        <Card style={{ paddingLeft: 10, paddingRight: 10}} >
            <Row>
            <Col className="container" >
                <br/><img src={img2} className='img-fluid' alt='...'/>
                <p>Figure 1: Malaysia Road Accident 2010 - 2019</p>
            </Col>
            <Col className="container" >
                <br/><img src={img3} className='img-fluid' alt='...'/>
                <p>Figure 2: Malaysia Road Fatalities 2010 - 2019​​</p>
            </Col>
            </Row>
        </Card>

        <h6><br/><strong>Harvard referencing: </strong></h6>
        <p>1. Mot.gov.my. 2021. Ministry of Transport Malaysia Official Portal Road Safety Regulation in Malaysia. [online] Available at: https://www.mot.gov.my/en/land/safety/road-safety-regulation</p>
        <p>2. Mot.gov.my. 2021. Ministry of Transport Malaysia Official Portal Road Safety Regulation in Malaysia. [online] Available at: https://www.mot.gov.my/en/land/safety/road-safety-regulation</p>
        <p>3. Mot.gov.my. 2021. Ministry of Transport Malaysia Official Portal Road Accidents and Fatalities in Malaysia. [online] Available at: https://www.mot.gov.my/en/land/safety/road-accident-and-facilities</p>
        </div>
    
    </>
    )
}

export default InfoTwo
