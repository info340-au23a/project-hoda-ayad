
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

function Footer(props) {
    return (
      <div className="footer">
        <div className="large-footer-content">
          <Row className="content-small">
            <Col><Link to="mailto:hayad03@uw.edu">hayad03@uw.edu</Link></Col>
            <Col><Link to="mailto:yohhn@uw.edu">yohhn@uw.edu</Link></Col>
            <Col><Link to="mailto:kchong@uw.edu">kchong@uw.edu</Link></Col>
            <Col><Link to="mailto:emmafin@uw.edu">emmafin@uw.edu</Link></Col>
            <Col className='col-3'>&#169; Campus Cloud 2024</Col>
          </Row>
        </div>

        <div className="small-footer-content">
          Contact us at:&nbsp;&nbsp;&nbsp;
          <Row className="content-small">
            <Col><Link to="mailto:hayad03@uw.edu">hayad03@uw.edu</Link></Col>
            <Col><Link to="mailto:yohhn@uw.edu">yohhn@uw.edu</Link></Col>
            <Col><Link to="mailto:kchong@uw.edu">kchong@uw.edu</Link></Col>
            <Col><Link to="mailto:emmafin@uw.edu">emmafin@uw.edu</Link></Col>
            <Col className='col-3'>&#169; Campus Cloud 2024</Col>
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
          <Row><Col>&#169; Campus Cloud 2024</Col></Row>
        </div>


      </div>
    );
  }

  export default Footer;