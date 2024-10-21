import { FooterStyled } from "../styles";

import { title, rightsReserved } from "../lib/labels.json";

const COPYRIGHT = `${title} © ${new Date().getFullYear()} ${rightsReserved}`;
const Footer = () => {
  return <FooterStyled>{COPYRIGHT}</FooterStyled>;
};

export default Footer;
