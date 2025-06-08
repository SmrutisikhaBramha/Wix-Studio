import React from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    quote: '"Eco-Friendly and Stylish"',
    description:
      'Use this space to share a testimonial quote about the business, its products or its services. Include a quote from an actual customer to build trust and attract site visitors.',
    name: 'James Mitchell',
    image: '/images/james.png', // put image inside public/images/
  },
  {
    quote: '"Ideal for Active Lifestyles"',
    description:
      'Use this space to share a testimonial quote about the business, its products or its services. Include a quote from an actual customer to build trust and attract site visitors.',
    name: 'Rebecca Thompson',
    image: '/images/rebecca.png',
  },
  {
    quote: '"My New Daily Essential"',
    description:
      'Use this space to share a testimonial quote about the business, its products or its services. Include a quote from an actual customer to build trust and attract site visitors.',
    name: 'Sophia Navarro',
    image: '/images/sophia.png',
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">
        FIND OUT WHAT PEOPLE ARE SAYING ABOUT QUENX
      </h2>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <h3 className="testimonial-quote">{item.quote}</h3>
            <p className="testimonial-description">{item.description}</p>
            <div className="testimonial-author">
              <img src={item.image} alt={item.name} className="author-image" />
              <span className="author-name">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
