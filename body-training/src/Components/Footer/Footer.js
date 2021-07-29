import React from "react";
import {
  FooterContainer,
  FooterStyling,
  FooterItem,
  FooterHeadline,
  FooterText,
  ButtonContainer,
  Button,
} from "./Footer.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faQuestionCircle,
  faFlagUsa,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <FooterContainer>
      <FooterStyling>
        <FooterItem border>
          <FooterHeadline>Running out of products?</FooterHeadline>
          <FooterText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Integer
            Aliquet.
          </FooterText>
          <ButtonContainer>
            <Button>Buy now</Button>
          </ButtonContainer>
        </FooterItem>
        <FooterItem border>
          <FooterHeadline marginHeadlineLeft>
            Bod-e Trainer in your pocket
          </FooterHeadline>
          <FooterText marginTextLeft>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Integer
            Aliquet.
          </FooterText>
          <ButtonContainer>
            <Button marginButtonLeft marginButtonRight>
              iOS
            </Button>
            <Button marginButtonLeft>Android</Button>
          </ButtonContainer>
        </FooterItem>
        <FooterItem>
          <FooterHeadline marginHeadlineLeft>
            Frequently asked questions
          </FooterHeadline>
          <FooterText marginTextLeft>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Integer
            Aliquet.
          </FooterText>
          <ButtonContainer>
            <Button marginButtonLeft>
              <FontAwesomeIcon icon={faBook} color="#009e7f" />
              Read FAQs
            </Button>
          </ButtonContainer>
        </FooterItem>
      </FooterStyling>
    </FooterContainer>
  );
}
export default Footer;
