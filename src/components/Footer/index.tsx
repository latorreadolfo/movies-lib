import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Thanks for visiting our webpage, you're always welcome!
        </FooterSubHeading>
        <FooterSubText>We have weekly updates on our database.</FooterSubText>
      </FooterSubscription>
    </FooterContainer>
  );
}

export default Footer;
