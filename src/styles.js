import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  ul {
    align-items: center;
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    li {
      span {
        padding-block: 10px;
        padding-inline: 20px;
        color: white;
        font-family: "Dancing Script", cursive;
        font-weight: bold;
      }
      span:hover {
        color: #ff416c;
      }
      padding-block: 10px;

      border-radius: 5px;
      &:hover {
        opacity: 0.7;
        background: white;
      }
      &:hover a {
        color: #ff416c;
      }
      a.active {
        color: #ff416c;
        background: white;
        opacity: 0.7;
        border-radius: 5px;
      }
      a {
        padding-block: 10px;
        padding-inline: 20px;
        height: fit-content;
        font-family: "Arial";
        text-decoration: none;
        color: white;
        font-weight: bold;
      }
    }
  }
`;

export const FooterStyled = styled.footer`
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: white;
  text-align: center;
  padding: 10px 0;
  font-family: Arial;
  font-weight: bold;
`;

//hero

export const HeroSection = styled.section`
  height: calc(100vh - 109px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/hero.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-family: "Dancing Script", cursive;
  margin-bottom: 20px;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-family: "Arial", sans-serif;
  margin-bottom: 30px;
`;

export const CallToAction = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  transition: opacity 0.3s ease;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const AboutSection = styled.section`
  box-shadow: 0px 10px 10px 0px;
  padding: 25px 20px;
  background-color: #f8f8f8;
  opacity: 0.85;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #ff416c;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }
`;

export const ServicesSection = styled.section`
  box-shadow: 0px 10px 10px 0px;
  padding: 50px 20px;
  background-color: #f8f8f8;
  opacity: 0.85;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #ff4b2b;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    padding: 0;

    li {
      background-color: #ffebee;
      padding: 15px 30px;
      border-radius: 10px;
      color: #ff416c;
      font-size: 1.2rem;
      width: 200px;
    }
  }
`;

export const TestimonialSection = styled.section`
  box-shadow: 0px 10px 10px 0px;
  padding: 50px 20px;
  background-color: #f8f8f8;
  opacity: 0.85;
  text-align: center;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }

  h2 {
    font-size: 2.5rem;
    color: #ff416c;
  }
`;

export const Testimonial = styled.div`
  max-width: 600px;
  margin: 20px auto;
  font-size: 1.2rem;
  color: #666;
  border-left: 5px solid #ff416c;
  padding-left: 20px;
`;

export const Author = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  img {
    width: 100%;
    max-width: 325px;
    border-radius: 10px;
  }
`;
export const Direction = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f8f8f8;
  width: 100%;
`;

export const ContactPageTitle = styled.h1`
  padding-top: 20px;
  font-size: 2.5rem;
  color: #ff416c;
  padding-inline: 20px;
`;

export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    height: calc(100vh - 129px);
  
  }
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const ContactDetails = styled.div`
  text-align: center;
  background-color: #f8f8f8;
  width: 100%;
  
  p {
    padding-inline: 20px;
    font-size: 1.2rem;
    color: #666;
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #ff416c;
    font-weight: bold;
  }

  a:hover {
    color: #ff4b2b;
  }
`;

export const ImageGallery = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-top: 20px;
  padding-inline: 20px;
  max-width: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    border-radius: 10px;
    max-width: 300px;
  }

  background-color: #f8f8f8;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  a {
    color: #ff416c;
    font-size: 1.5rem;
  }

  a:hover {
    color: #ff4b2b;
  }
`;
