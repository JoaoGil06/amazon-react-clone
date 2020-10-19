import React from "react";

import {
  HeaderComponent,
  Logo,
  Search,
  SearchInput,
  SearchInputIcon,
  Navigation,
  NavigationOption,
  NavigationOptionLineOne,
  NavigationOptionLineTwo,
  NavigationOptionBasket,
  Basket,
  BasketCount,
} from "./styles";

const Header = () => {
  return (
    <HeaderComponent>
      <Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

      <Search>
        <SearchInput type="text" />
        <SearchInputIcon />
      </Search>

      <Navigation>
        <NavigationOption>
          <NavigationOptionLineOne>Hello Guest</NavigationOptionLineOne>
          <NavigationOptionLineTwo>Sign In</NavigationOptionLineTwo>
        </NavigationOption>

        <NavigationOption>
          <NavigationOptionLineOne>Returns</NavigationOptionLineOne>
          <NavigationOptionLineTwo>& Orders</NavigationOptionLineTwo>
        </NavigationOption>

        <NavigationOption>
          <NavigationOptionLineOne>Your</NavigationOptionLineOne>
          <NavigationOptionLineTwo>Prime</NavigationOptionLineTwo>
        </NavigationOption>

        <NavigationOptionBasket>
          <Basket />
          <BasketCount>0</BasketCount>
        </NavigationOptionBasket>
      </Navigation>
    </HeaderComponent>
  );
};

export default Header;
