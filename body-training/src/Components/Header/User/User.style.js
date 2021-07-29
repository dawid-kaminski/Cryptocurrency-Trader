import styled from "styled-components";

export const UserContainer = styled.div`
  height: 90%;
  width: 30%;
  margin: 0px;
  padding: 0px;
  background-color: inherit;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const User = styled.div`
  height: 70%;
  width: 100%;
  background-color: inherit;
  display: flex;
  text-align: end;
  justify-content: space-around;
`;

export const UserProfilePicture = styled.image`
  height: 50%;
  width: 50%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserProfileName = styled.div`
  height: 40%;
  width: 40%;
  color: #7a7e7e;
  font-size: 17px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const UserChevronIcon = styled.div`
  height: 50%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
