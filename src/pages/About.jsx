import {
  AboutSection,
  Author,
  Direction,
  ImageContainer,
  ServicesSection,
  Testimonial,
  TestimonialSection,
} from "../styles";

import {
  services,
  serviceLabels,
  about,
  aboutLabel,
  testimonialLabels,
  testimonials,
} from "../lib/labels.json";

const About = () => {
  return (
    <Direction>
      <AboutSection>
        <h1>{aboutLabel}</h1>
        <div>
          <p>{about}</p>
          <ImageContainer>
            <img src="/image1.jpg" alt="nails" />
          </ImageContainer>
        </div>
      </AboutSection>
      <ServicesSection>
        <h2>{serviceLabels}</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service.name}</li>
          ))}
        </ul>
      </ServicesSection>
      <TestimonialSection>
        <h2>{testimonialLabels}</h2>
        <div>
          <ImageContainer>
            <img src="/image2.jpg" alt="nails" />
          </ImageContainer>
          <div>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <p>{testimonial.comment}</p>
                <Author>- {testimonial.name}</Author>
              </Testimonial>
            ))}
          </div>
        </div>
      </TestimonialSection>
    </Direction>
  );
};

export default About;
