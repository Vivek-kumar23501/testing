import React, { useState, useEffect } from 'react';
import {
  Form, FormGroup, Label, Input, Row, Col, Button
} from 'reactstrap';
import './AllotmentForm.css'; // optional external CSS

function AllotmentForm() {
  const [step, setStep] = useState(1);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="form-wrapper"
      style={
        isDesktop
          ? {
              marginLeft: '320px',
              marginTop: '50px',
              maxWidth: '800px',
            }
          : {
              marginLeft: '0',
              marginTop: '50px',
              padding: '0 15px',
            }
      }
    >
      <h2 className="mb-4 text-center">Hostel Allotment Form</h2>
      <Form>
        {/* Step 1: Personal Details */}
        {step === 1 && (
          <>
            <h4>Personal Details</h4>
            {/* [Remaining personal details inputs unchanged] */}
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Candidate's First Name</Label>
                  <Input type="text" placeholder="Enter your first name" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Candidate's Last Name</Label>
                  <Input type="text" placeholder="Enter your last name" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
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

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Date of Birth</Label>
                  <Input type="date" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup tag="fieldset">
                  <Label>Gender</Label>
                  <FormGroup check inline>
                    <Label check><Input type="radio" name="gender" /> Male</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check><Input type="radio" name="gender" /> Female</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check><Input type="radio" name="gender" /> Others</Label>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup tag="fieldset">
              <Label>PWD</Label>
              <FormGroup check inline>
                <Label check><Input type="radio" name="pwd" /> YES</Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check><Input type="radio" name="pwd" /> NO</Label>
              </FormGroup>
            </FormGroup>

            <h4>Permanent Address</h4>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Address</Label>
                  <Input type="text" placeholder="Enter your Address" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>District</Label>
                  <Input type="text" placeholder="Enter District" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>State</Label>
                  <Input type="text" placeholder="Enter State" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Country</Label>
                  <Input type="text" placeholder="Enter Country" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Mobile Number</Label>
                  <Input type="text" placeholder="Enter your Mobile Number" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Alternate Contact Number</Label>
                  <Input type="text" placeholder="Enter your alternate contact number" />
                </FormGroup>
              </Col>
            </Row>

            <Button color="primary" onClick={nextStep}>Next</Button>
          </>
        )}

        {/* Step 2: Emergency, Academic, Hostel Details */}
        {step === 2 && (
          <>
            <h4>Emergency Details</h4>
            {/* [Inputs same as your existing code] */}
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Emergency Contact First Name</Label>
                  <Input type="text" placeholder="Enter first name" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Emergency Contact Last Name</Label>
                  <Input type="text" placeholder="Enter last name" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="Enter Email" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Mobile Number</Label>
                  <Input type="tel" placeholder="Enter Mobile Number" />
                </FormGroup>
              </Col>
            </Row>

            <h4>Academic Details</h4>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>College Roll Number</Label>
                  <Input type="text" placeholder="Enter Roll Number" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Registration Number</Label>
                  <Input type="text" placeholder="Enter Registration Number" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Branch</Label>
                  <Input type="select">
                    <option value="">Select Branch</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>EEE</option>
                    <option>ME</option>
                    <option>CE</option>
                    <option>IT</option>
                    <option>AE</option>
                    <option>PIE</option>
                    <option>BT</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Semester</Label>
                  <Input type="select">
                    <option value="">Select Semester</option>
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <h4>Hostel Details</h4>
            <FormGroup tag="fieldset">
              <Label>Hostel Name</Label>
              <FormGroup check inline>
                <Label check><Input type="radio" name="hostel" /> Boy's Hostel</Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check><Input type="radio" name="hostel" /> Girl's Hostel</Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label>Room Number</Label>
              <Input type="text" placeholder="Enter Room Number" />
            </FormGroup>

            <Button color="secondary" onClick={prevStep} className="me-2">Back</Button>
            <Button color="primary" onClick={nextStep}>Next</Button>
          </>
        )}

        {/* Step 3: Upload Documents */}
        {step === 3 && (
          <>
            <h4>Upload Documents</h4>
            {[
              'Passport Size Photo',
              'Aadhar Card',
              'Registration Slip',
              'Hostel Maintenance Slip',
              'Mess Payment Slip'
            ].map((doc, i) => (
              <FormGroup key={i}>
                <Label>{doc}</Label>
                <Input type="file" />
              </FormGroup>
            ))}

            <Button color="secondary" onClick={prevStep} className="me-2">Back</Button>
            <Button color="success">Submit</Button>
          </>
        )}
      </Form>
    </div>
  );
}

export default AllotmentForm;
