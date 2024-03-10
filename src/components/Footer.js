
import React from 'react';
import { Col, Row } from 'reactstrap';

function Footer(props) {
    return (
      <div className="footer">
        <div className="large-footer-content">
          <Row className="footer-content">
              <Col>Contact us at: </Col>
              <Col><a href="mailto:hayad03@uw.edu">hayad03@uw.edu</a></Col>
              <Col><a href="mailto:yohhn@uw.edu">yohhn@uw.edu</a></Col>
              <Col><a href="mailto:kchong@uw.edu">kchong@uw.edu</a></Col>
              <Col><a href="emmafin@uw.edu">emmafin@uw.edu</a></Col>
          </Row>
        </div>

        <div className="small-footer-content">
          Contact us at:&nbsp;&nbsp;&nbsp;
          <Row className="content-small">
            <Col><a href="mailto:hayad03@uw.edu">hayad03@uw.edu</a></Col>
            <Col><a href="mailto:yohhn@uw.edu">yohhn@uw.edu</a></Col>
            <Col><a href="mailto:kchong@uw.edu">kchong@uw.edu</a></Col>
            <Col><a href="emmafin@uw.edu">emmafin@uw.edu</a></Col>
          </Row>
        </div>

        <div className="extra-small-footer-content">
          Contact us at:&nbsp;&nbsp;&nbsp;
          <Row className="content-extra-small">
            <Col><a href="mailto:hayad03@uw.edu">hayad03@uw.edu</a></Col>
            <Col><a href="mailto:yohhn@uw.edu">yohhn@uw.edu</a></Col>
          </Row>
          <Row className="content-extra-small">
            <Col><a href="mailto:kchong@uw.edu">kchong@uw.edu</a></Col>
            <Col><a href="emmafin@uw.edu">emmafin@uw.edu</a></Col>
          </Row>
        </div>


      </div>
    );
  }

  export default Footer;