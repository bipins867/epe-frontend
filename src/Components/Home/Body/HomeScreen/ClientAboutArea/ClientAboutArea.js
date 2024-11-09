import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ClientAboutArea.css'; // For custom styling (optional)

const clients = [
  {
    name: 'Prakash Jha',
    image: '/Assets/HomeScreen/client-image.png',
    feedback:
      'It has been a game-changer for my financial life! Managing my finances used to be a hassle, but E PE made everything simple and efficient. Their platform is incredibly user-friendly, and I love how I can track my transaction history, reserves, and investments all in one place.',
  },
  {
    name: 'Mohit Baghel',
    image: '/Assets/HomeScreen/client-image.png',
    feedback:
      'The platform is incredibly intuitive and makes everything from budgeting to investing so much simpler. I love the real-time insights and analytics that help me make informed financial decisions.',
  },
  {
    name: 'Surbhi Rastogi',
    image: '/Assets/HomeScreen/client-image.png',
    feedback:
      "I've always been concerned about online security, especially when it comes to managing my finances. E PE provides top-notch security features like encryption and 2-step verification login, so I know my personal data and money are safe.",
  },
  {
    name: 'Prakash Jha',
    image: '/Assets/HomeScreen/client-image.png',
    feedback:
      'It has been a game-changer for my financial life! Managing my finances used to be a hassle, but E PE made everything simple and efficient. Their platform is incredibly user-friendly, and I love how I can track my transaction history, reserves, and investments all in one place.',
  },
  {
    name: 'Mohit Baghel',
    image: '/Assets/HomeScreen/client-image.png',
    feedback:
      'The platform is incredibly intuitive and makes everything from budgeting to investing so much simpler. I love the real-time insights and analytics that help me make informed financial decisions.',
  },
  {
    name: 'Surbhi Rastogi',
    image: '/Assets/HomeScreen/client-image.png',
    feedback:
      "I've always been concerned about online security, especially when it comes to managing my finances. E PE provides top-notch security features like encryption and 2-step verification login, so I know my personal data and money are safe.",
  },
];

export const ClientAboutArea = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to next slide
  const nextSlide = () => {
    if (currentIndex < clients.length - 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first slide when reaching the end
    }
  };

  // Go to previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(clients.length - 2); // Go to the last slide when at the start
    }
  };

  return (
    <section className="about-area">
      <Container>
        {/* Title */}
        <Row className="text-center mb-5">
          <Col>
            <div className="about-title">
              <h1 className="text-uppercase title-h1">Client Say about us</h1>
            </div>
          </Col>
        </Row>

        {/* Client Carousel/Testimonials */}
        <div className="carousel-container">
          <div className="carousel-inner">
            {clients.slice(currentIndex, currentIndex + 2).map((client, index) => (
              <div key={index} className="client-card-wrapper">
                <Card className="client-card">
                  <Row>
                    {/* Client Image */}
                    <Col xs={4} className="client-img">
                      <img src={client.image} alt={client.name} className="img-fluid" />
                    </Col>

                    {/* Client Feedback */}
                    <Col xs={8} className="about-client">
                      <h4 className="text-uppercase">{client.name}</h4>
                      <p className="para">{client.feedback}</p>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevSlide}>
              Prev
            </button>
            <button className="carousel-btn" onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
