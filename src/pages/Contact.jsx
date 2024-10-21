import {
  ContactDetails,
  ContactPage,
  ContactPageTitle,
  Direction,
  ImageGallery,
  SocialLinks,
} from "../styles";

import {
  contactPageLabel,
  cellphone,
  cellphoneValue,
  cellphoneValue2,
  email,
  emailValue,
  address,
  instagram,
  facebook,
} from "../lib/labels.json";

const Contact = () => {
  return (
    <Direction>
      <ContactPage>
        <ContactPageTitle>{contactPageLabel}</ContactPageTitle>
        <ImageGallery>
          <img src="/image3.jpg" alt="nails" />
          <img src="/image4.jpg" alt="nails" />
          <img src="/image5.jpg" alt="nails" />
          <img src="/image6.jpg" alt="nails" />
        </ImageGallery>
        <ContactDetails>
          <p>
            {cellphone}: <a href={`tel:${cellphoneValue2}`}>{cellphoneValue}</a>
          </p>
          <p>
            {email}: <a href={`mailto:${emailValue}`}>{emailValue}</a>
          </p>
          <p>{address}</p>

          <SocialLinks>
            <a
              href={`https://wa.me/${cellphoneValue2.slice(1)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href={`${facebook}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={`${instagram}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialLinks>
        </ContactDetails>
      </ContactPage>
    </Direction>
  );
};

export default Contact;
