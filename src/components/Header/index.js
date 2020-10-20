import React from "react";
import { Link } from "react-router-dom";

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

import { useStateValue } from "../../contexts/StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <HeaderComponent>
      <Link to="/">
        <Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>

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

        <Link to="/checkout">
          <NavigationOptionBasket>
            <Basket />
            <BasketCount>{basket?.length}</BasketCount>
          </NavigationOptionBasket>
        </Link>
      </Navigation>
    </HeaderComponent>
  );
};

export default Header;
