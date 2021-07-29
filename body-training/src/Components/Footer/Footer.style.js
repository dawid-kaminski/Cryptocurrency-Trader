import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  height: 30%;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
`;

export const FooterStyling = styled.div`
  height: 75%;
  width: 60%;
  background-color: inherit;
  display: flex;
  flex-direction: row;
`;

export const FooterItem = styled.div`
  height: 100%;
  width: 33.3%;
  margin-top: 35px;
  background-color: #f9f9f9;

  ${(props) =>
    props.border &&
    css`
      border-right: 2px solid #7a7e7e;
    `}
`;

export const FooterHeadline = styled.div`
  height: 50%;
  width: 100%;
  color: #7a7e7e;
  font-size: 28px;

  ${(props) =>
    props.marginHeadlineLeft &&
    css`
      margin-left: 15px;
    `}
`;

export const FooterText = styled.div`
  height: 35%;
  width: 100%;
  color: #7a7e7e;

  ${(props) =>
    props.marginTextLeft &&
    css`
      margin-left: 15px;
    `}
`;

export const ButtonContainer = styled.div`
  height: 15%;
  width: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;

export const Button = styled.button`
  height: 100%;
  border: 2px solid #7a7e7e;
  border-radius: 5px;
  color: #7a7e7e;
  background-color: inherit;

  ${(props) =>
    props.marginButtonLeft &&
    css`
      margin-left: 15px;
    `}

  ${(props) =>
    props.marginButtonRight &&
    css`
      margin-right: 10px;
    `}
`;
