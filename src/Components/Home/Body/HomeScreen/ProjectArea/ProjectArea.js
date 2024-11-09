import React, { useState } from 'react';
import './ProjectArea.css';

// Card component
const Card = ({ title, image, description, category }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`col-lg-4 col-md-6 col-sm-12 project-image-item element-item ${category}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="our-project">
        <div className="img">
          {/* Both title and image are shown */}
          <h4 className="text-uppercase">{title}</h4>
          <img src={image} alt={title} className="img-fluid" />
          
          {/* On hover, show content and hide image */}
          <div className="hover-text">
            <p className="text-secondary">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
export const ProjectArea = () => {
  const [activeCategory, setActiveCategory] = useState('*');

  const projects = [
    { title: 'DOORSTEP STEP SERVICES', image: '/Assets/HomeScreen/OurComponents/door-step.png', description: 'We provide Door-Step services to our valuable customers at minimum or no cost.', category: 'latest' },
    { title: 'PiggyBox', image: '/Assets/HomeScreen/OurComponents/piggy.png', description: 'We provide a digital wallet with 12% ROI per annum.', category: 'popular' },
    { title: 'Loan Services', image: '/Assets/HomeScreen/OurComponents/loan.png', description: 'Personal, education, and medical loans with competitive interest rates.', category: 'popular' },
    { title: 'Investment Consultation', image: '/Assets/HomeScreen/OurComponents/investment.png', description: 'We offer free investment consultation to help protect savings against inflation.', category: 'upcoming' },
    { title: 'Career Consultation', image: '/Assets/HomeScreen/OurComponents/career.png', description: 'We offer career consultation to help customers find fulfilling careers.', category: 'upcoming' },
    { title: 'Refer & Earn Program', image: '/Assets/HomeScreen/OurComponents/refer-and-earn.png', description: 'Earn up to Rs 1000 and other rewards with our referral program.', category: 'following' }
  ];

  // Filter projects based on category
  const filteredProjects = activeCategory === '*' ? projects : projects.filter(project => project.category === activeCategory);

  return (
    <section className="project-area">
      <div className="container">
        <div className="project-title pb-5">
          <h1 className="text-uppercase title-h1" style={{ color: '#00056B' }}>Our Components</h1>
          <h1 className="text-uppercase title-h1" style={{ color: '#00056B' }}>And Bodies</h1>
        </div>

        <div className="button-group project-button-group">
          <button type="button" className={activeCategory === '*' ? 'active' : ''} onClick={() => setActiveCategory('*')}>All</button>
          <button type="button" className={activeCategory === 'popular' ? 'active' : ''} onClick={() => setActiveCategory('popular')}>Popular</button>
          <button type="button" className={activeCategory === 'latest' ? 'active' : ''} onClick={() => setActiveCategory('latest')}>Latest</button>
          <button type="button" className={activeCategory === 'following' ? 'active' : ''} onClick={() => setActiveCategory('following')}>Following</button>
          <button type="button" className={activeCategory === 'upcoming' ? 'active' : ''} onClick={() => setActiveCategory('upcoming')}>Upcoming</button>
        </div>

        <div className="row grid">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
