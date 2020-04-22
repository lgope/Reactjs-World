import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            <span style={{color: "#8ca8c4"}}>&copy; {new Date().getFullYear()} Copyright: </span>
           <a href="https://github.com/lgope" target="blank"> Lakshman </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;