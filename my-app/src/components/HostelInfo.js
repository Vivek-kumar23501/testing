import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import './HostelInfo.css';

const HostelInfo = () => {
  return (
    <Container className="py-4">
      {/* College Heading with Animation */}
      <div className="college-heading text-center mb-5">
        <h2>🏫 Government Engineering College, West Champaran</h2>
      </div>

      {/* Hostel Intro */}
      <Card className="mb-4 shadow-sm">
        <CardBody>
          <CardTitle tag="h5">About the Hostels</CardTitle>
          <CardText>
            The college provides hostel facilities for both male and female students. There are:
          </CardText>
          <ul>
            <li><strong>Boys Hostel</strong></li>
            <li><strong>Girls Hostel</strong></li>
          </ul>
        </CardBody>
      </Card>

      {/* Boys Hostel Info */}
      <Card className="mb-4 shadow-sm">
        <CardBody>
          <CardTitle tag="h5">👦 Boys Hostel</CardTitle>
          <Row className="g-4 hostel-contacts">
            <Col md={4}>
              <CardText><strong>Warden:</strong> Mr. Rajeev Kumar</CardText>
              <CardText><strong>Mobile:</strong> +91 9876543210</CardText>
              <CardText><strong>Office Hours:</strong> 9:00 AM – 5:00 PM</CardText>
            </Col>
            <Col md={4}>
              <CardText><strong>Caretaker:</strong> Mr. Arvind Singh</CardText>
              <CardText><strong>Mobile:</strong> +91 9876501234</CardText>
              <CardText><strong>Office Hours:</strong> 8:00 AM – 4:00 PM</CardText>
            </Col>
            <Col md={4}>
              <CardText><strong>Mess Manager:</strong> Mr. Suresh Yadav</CardText>
              <CardText><strong>Mobile:</strong> +91 9123456789</CardText>
              <CardText><strong>Office Hours:</strong> 6:00 AM – 2:00 PM</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* Girls Hostel Info */}
      <Card className="mb-4 shadow-sm">
        <CardBody>
          <CardTitle tag="h5">👧 Girls Hostel</CardTitle>
          <Row className="g-4 hostel-contacts">
            <Col md={4}>
              <CardText><strong>Warden:</strong> Mrs. Neha Sharma</CardText>
              <CardText><strong>Mobile:</strong> +91 9988776655</CardText>
              <CardText><strong>Office Hours:</strong> 10:00 AM – 6:00 PM</CardText>
            </Col>
            <Col md={4}>
              <CardText><strong>Caretaker:</strong> Mrs. Rani Kumari</CardText>
              <CardText><strong>Mobile:</strong> +91 9876012345</CardText>
              <CardText><strong>Office Hours:</strong> 8:30 AM – 4:30 PM</CardText>
            </Col>
            <Col md={4}>
              <CardText><strong>Mess Manager:</strong> Mrs. Anjali Verma</CardText>
              <CardText><strong>Mobile:</strong> +91 9001122334</CardText>
              <CardText><strong>Office Hours:</strong> 7:00 AM – 3:00 PM</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default HostelInfo;
