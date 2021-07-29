import styled from "styled-components";

export const HeaderOptionOpen = styled.div`
  height: 100%;
  width: 33.3%;
  margin: 0px;
  padding: 0px;
  background-color: white;
  color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
`;

export const HeaderText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderDash = styled.div`
  height: 5px;
  width: 50px;
  border-bottom: 5px solid orange;
  border-radius: 3px;
`;
