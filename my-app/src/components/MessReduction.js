import React, { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';
import './MessReduction.css'; // import CSS for styling

const MessReduction = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="form-wrapper"
      style={
        isDesktop
          ? {
              marginLeft: '370px',
              marginTop: '50px',
              maxWidth: '700px',
            }
          : {
              marginLeft: '0',
              marginTop: '20px',
              padding: '0 15px',
            }
      }
    >
      <h2 className="text-center mb-4">Mess Reduction</h2>
      <Form className="mess-form">
        {/* Candidate Name */}
        <FormGroup>
          <Label for="candidateName">Candidate Name</Label>
          <Row>
            <Col md={6} xs={12} className="mb-2">
              <Input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
              />
            </Col>
            <Col md={6} xs={12} className="mb-2">
              <Input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
              />
            </Col>
          </Row>
        </FormGroup>

        {/* Roll No and Branch */}
        <FormGroup>
          <Row>
            <Col md={6} xs={12} className="mb-2">
              <Input
                type="text"
                id="rollNo"
                placeholder="Enter your college roll no"
              />
            </Col>
            <Col md={6} xs={12} className="mb-2">
              <Input type="select" id="branch" defaultValue="">
                <option value="" disabled>
                  Select Branch
                </option>
                <option>CSE</option>
                <option>CSE (Cyber Security)</option>
                <option>ECE</option>
                <option>EE</option>
                <option>ME</option>
                <option>CE</option>
                <option>VLSI</option>
              </Input>
            </Col>
          </Row>
        </FormGroup>

        {/* Session and Semester */}
        <FormGroup>
          <Row>
            <Col md={6} xs={12} className="mb-2">
              <Input
                type="text"
                id="session"
                placeholder="Enter your Session"
              />
            </Col>
            <Col md={6} xs={12} className="mb-2">
              <Input type="select" id="semester" defaultValue="">
                <option value="" disabled>
                  Select Semester
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem}>{sem}</option>
                ))}
              </Input>
            </Col>
          </Row>
        </FormGroup>

        {/* Room No, Date From, Date To */}
        <FormGroup>
          <Row>
            <Col md={4} xs={12} className="mb-2">
              <Input
                type="text"
                id="roomNo"
                placeholder="Enter your room no"
              />
            </Col>
            <Col md={4} xs={12} className="mb-2">
              <Input
                type="date"
                id="dateFrom"
                placeholder="Date From"
              />
            </Col>
            <Col md={4} xs={12} className="mb-2">
              <Input
                type="date"
                id="dateTo"
                placeholder="Date To"
              />
            </Col>
          </Row>
        </FormGroup>

        {/* Number of Days */}
        <FormGroup>
          <Input
            className="days"
            type="number"
            id="numDays"
            placeholder="Number of days"
          />
        </FormGroup>

        {/* Reason */}
        <FormGroup>
          <Input
            className="reason"
            type="textarea"
            id="reason"
            placeholder="Reason"
            rows={4}
          />
        </FormGroup>

        {/* File Upload */}
        <FormGroup>
          <Label for="fileUpload">Upload Document (Optional)</Label>
          <Input type="file" id="fileUpload" />
        </FormGroup>

        <Button color="primary" type="submit" className="submit-btn w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MessReduction;
