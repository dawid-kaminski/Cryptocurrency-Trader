import React from "react";
import {
  FooterContainer,
  FooterStyling,
  FooterItem,
  FooterHeadline,
  FooterText,
  ButtonContainer,
  Button,
  FooterIcon,
} from "./Footer.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";

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
            <Button>
              Buy now
              <FooterIcon Chevron>
                <FontAwesomeIcon icon={faChevronRight} color="#7a7e7e" />
              </FooterIcon>
            </Button>
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
              <FooterIcon>
                <FontAwesomeIcon icon={faApple} color="#7a7e7e" />
              </FooterIcon>
              iOS
              <FooterIcon Chevron>
                <FontAwesomeIcon icon={faChevronRight} color="#7a7e7e" />
              </FooterIcon>
            </Button>
            <Button marginButtonLeft>
              <FooterIcon>
                <FontAwesomeIcon icon={faAndroid} color="#7a7e7e" />
              </FooterIcon>
              Android
              <FooterIcon Chevron>
                <FontAwesomeIcon icon={faChevronRight} color="#7a7e7e" />
              </FooterIcon>
            </Button>
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
              Read FAQs
              <FooterIcon Chevron>
                <FontAwesomeIcon icon={faChevronRight} color="#7a7e7e" />
              </FooterIcon>
            </Button>
          </ButtonContainer>
        </FooterItem>
      </FooterStyling>
    </FooterContainer>
  );
}
export default Footer;
