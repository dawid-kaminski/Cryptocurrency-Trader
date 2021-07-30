import React from "react";
import {
  UserContainer,
  User,
  UserProfilePicture,
  UserProfileName,
  UserChevronIcon,
} from "./User.style";
import Logo from "../../../images/ProfileFace.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function UserProfile() {
  return (
    <UserContainer>
      <User>
        <UserProfilePicture radius>
          <img
            src={Logo}
            height="50"
            width="50"
            style={{ borderRadius: "50%" }}
          />
        </UserProfilePicture>
        <UserProfileName>Olivia Wilde</UserProfileName>
        <UserChevronIcon>
          <FontAwesomeIcon icon={faChevronDown} color="#7a7e7e" />
        </UserChevronIcon>
      </User>
    </UserContainer>
  );
}

export default UserProfile;
