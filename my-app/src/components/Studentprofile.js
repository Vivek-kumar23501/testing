import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label
} from 'reactstrap';
import './Studentprofile.css';

const StudentProfile = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Student Profile</h2>

      {/* Profile Image */}
      <div className="d-flex justify-content-center mb-3">
        <img
          src="/phhoto.jpg" // Make sure 'phhoto.jpg' is inside the public folder
          alt="Profile"
          className="rounded-circle"
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'cover',
            border: '2px solid #007bff'
          }}
        />
      </div>

      {/* Edit Profile Button */}
      <div className="d-flex justify-content-center mb-5">
        <Button color="primary" className="px-4 rounded-pill">
          Edit Profile
        </Button>
      </div>

      {/* Profile Form */}
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <Label>First Name</Label>
              <Input type="text" placeholder="Enter your first name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Last Name</Label>
              <Input type="text" placeholder="Enter your last name" />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <Label>Father's Name</Label>
              <Input type="text" placeholder="Enter Father's Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Mother's Name</Label>
              <Input type="text" placeholder="Enter Mother's Name" />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <Label>Date of Birth</Label>
              <Input type="date" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Gender</Label>
              <Input type="select">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <Label>Mobile Number</Label>
              <Input type="text" placeholder="Enter Mobile Number" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Branch</Label>
              <Input type="select">
                <option>Select Branch</option>
                <option>CSE</option>
                <option>CSE Cyber Security</option>
                <option>Electrical</option>
                <option>ECE</option>
                <option>Civil</option>
                <option>Mechanical</option>
                <option>VLSI</option>
                
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <Label>Semester</Label>
              <Input type="select">
                <option>Select Semester</option>
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Admission Year</Label>
              <Input type="text" placeholder="Enter Admission Year" />
            </FormGroup>
          </Col>
        </Row>

        <div className="d-flex justify-content-center mt-4">
          <Button color="primary" className="px-5">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default StudentProfile;
