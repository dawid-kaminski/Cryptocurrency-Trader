import React, { useState } from "react";
import { HeaderContainer } from "./Header.style";
import { HeaderOptions } from "../HeaderOptions/HeaderOptions.style";
import HeaderItem from "./HeaderItem";
import User from "./User/User";

function Header() {
  const [isHeaderOptionOpen, setIsHeaderOptionOpen] = useState(0);

  const setHeaderOptionActive = (value) => {
    setIsHeaderOptionOpen(value);
  };

  return (
    <HeaderContainer>
      <HeaderOptions>
        <HeaderItem
          onClickItem={() => setHeaderOptionActive(0)}
          isActive={isHeaderOptionOpen === 0}
          text="Dashboard"
        />
        <HeaderItem
          onClickItem={() => setHeaderOptionActive(1)}
          isActive={isHeaderOptionOpen === 1}
          text="Recipes"
        />
        <HeaderItem
          onClickItem={() => setHeaderOptionActive(2)}
          isActive={isHeaderOptionOpen === 2}
          text="Challenge"
        />
      </HeaderOptions>
      <User />
    </HeaderContainer>
  );
}

export default Header;
