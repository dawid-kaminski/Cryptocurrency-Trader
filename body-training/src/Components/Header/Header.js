import React, { useState } from "react";
import { HeaderContainer } from "./Header.style";
import { HeaderOptions } from "../HeaderOptions/HeaderOptions.style";
import Dashboard from "../HeaderOptions/Dashboard/Dashboard";
import Recipes from "../HeaderOptions/Recipes/Recipes";
import Challenge from "../HeaderOptions/Challenge/Challenge";
import User from "./User/User";

function Header() {
  const [isHeaderOptionOpen, setIsHeaderOptionOpen] = useState(0);

  const setHeaderOptionActive = (value) => {
    setIsHeaderOptionOpen(value);
  };

  return (
    <HeaderContainer>
      <HeaderOptions>
        <Dashboard
          onClickItem={() => setHeaderOptionActive(0)}
          isActive={isHeaderOptionOpen === 0}
        />
        <Recipes
          onClickItem={() => setHeaderOptionActive(1)}
          isActive={isHeaderOptionOpen === 1}
        />
        <Challenge
          onClickItem={() => setHeaderOptionActive(2)}
          isActive={isHeaderOptionOpen === 2}
        />
      </HeaderOptions>
      <User />
    </HeaderContainer>
  );
}

export default Header;
