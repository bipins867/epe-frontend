import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Kit.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const KitPage = () => {
  const dummyUser = {
    name: "Bipin Singh",
    customerId: "SDUPM59598",
  };

  const user = dummyUser;

  const letterRef = useRef();

  const handlePrint = () => {
    const printContent = letterRef.current.innerHTML;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
          <title>Welcome Letter</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 20px;
            }
            .welcome-letter-logo {
              display: block;
              margin: 0 auto 20px;
              max-width: 120px;
            }
            .print-container {
              max-width: 700px;
              margin: auto;
            }
            h1, h3 {
              text-align: center;
            }
            ul {
              padding-left: 20px;
            }
          </style>
        </head>
        <body>${printContent}</body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
    newWindow.close();
  };

  return (
    <Container className="welcome-letter-page py-4">
      <PageComponent title={"Kit"}/>
      <Row>
        <Col>
          <div ref={letterRef} className="print-container">
            <img
              src="https://epeindia.in/img/epeLogo.png"
              alt="E PE Logo"
              className="welcome-letter-logo"
            />
            <h1>M/S TECHFIN INNOVATIONS PVT LTD</h1>
            <h3>Dear {user.name},</h3>
            <p>Customer ID: {user.customerId}</p>
            <h4>SUBJECT: Welcome to EPE Family</h4>
            <p>
              Welcome to E PE! We are thrilled to have you as part of our
              community and are excited to be a part of your journey. Your trust
              in us is something we deeply value, and we're committed to
              delivering the best experience possible.
            </p>
            <p>
              At E PE, we pride ourselves on Innovation, Security, Transparency,
              Customer-Centricity, Integrity, Inclusivity, Collaboration,
              Agility, Trust, and Sustainability. Whether you're here to enjoy
              our services, our team is ready to support you every step of the
              way.
            </p>
            <h5>Here’s what you can expect from us:</h5>
            <ul>
              <li>Benefit of High ROI up to 12% per annum on your reserves.</li>
              <li>
                Benefit of various loan facilities includes Personal Loan,
                Startup Funding, Merchant Business Loan, Education Loan, Medical
                Loan, Loan against Property through our partnered NBFCs on lower
                interest rates.
              </li>
              <li>
                Benefit of Startup/ Business Consultation support includes
                Incorporation, Compliance Management, Startup Business Planning,
                and other Legal compliances.
              </li>
              <li>
                Benefit of High ROI up to 18% per annum on your investment.
              </li>
              <li>
                Luck Draw winners will get a chance to win assured rewards
                including Tour & Travel Packages along with other gifts every
                year.
              </li>
              <li>Free access to all Company events, seminars & webinars.</li>
              <li>
                Benefit of Door-Step services with minimum or no additional
                cost.
              </li>
              <li>
                Benefit of free Career Counselling Support through experienced
                Career Counsellors.
              </li>
              <li>
                Benefit of free Investment Consultation Support through
                experienced Investment Counsellors.
              </li>
              <li>And much more!!!</li>
            </ul>
            <p>
              If you ever have any questions or need assistance, don’t hesitate
              to reach out to our customer support team at support@epeindia.in.
              We’re always here to help!
            </p>
            <p>
              Thank you for choosing E PE. We look forward to a long and
              successful partnership.
            </p>
            <p>Warm regards,</p>
            <p>E PE Team</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 text-center">
        <Col>
          <Button variant="primary" onClick={handlePrint}>
            Print Letter
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
