'use strict'

import React from 'react';
import { Col, Row } from 'reactstrap';

function Footer(props) {
    return (
      <div className="footer">
            <Row className="footer-content">
                <Col>Contact us at:</Col>
                <Col><a href="mailto:hayad03@uw.edu">hayad03@uw.edu</a></Col>
                <Col><a href="mailto:yohhn@uw.edu">yohhn@uw.edu</a></Col>
                <Col><a href="mailto:kchong@uw.edu">kchong@uw.edu</a></Col>
                <Col><a href="emmafin@uw.edu">emmafin@uw.edu</a></Col>
            </Row>
      </div>
    );
  }
  
  export default Footer;