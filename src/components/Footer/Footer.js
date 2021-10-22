import React from 'react';
import { MDBContainer, MDBFooter, MDBRow, MDBCol } from "mdbreact";

function Footer() {
    return (
        <div>
        <MDBRow className="mx-md-n5">
            <MDBCol className="mx-100"/>
      </MDBRow>
        <MDBFooter className="font-small">
            <div className="footer-copyright text-right py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright <a href="http://localhost:3000/about"> Team Avatar </a>
                </MDBContainer>
            </div>
        </MDBFooter>
        </div>
    )
}

export default Footer
