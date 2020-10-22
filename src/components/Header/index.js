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
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <Link to={!user && "/login"}>
          <NavigationOption onClick={handleAuthentication}>
            <NavigationOptionLineOne>
              Hello {user?.email}
            </NavigationOptionLineOne>
            <NavigationOptionLineTwo>
              {user ? "Sign Out" : "Sign In"}
            </NavigationOptionLineTwo>
          </NavigationOption>
        </Link>
        <Link to="/orders">
          <NavigationOption>
            <NavigationOptionLineOne>Returns</NavigationOptionLineOne>
            <NavigationOptionLineTwo>& Orders</NavigationOptionLineTwo>
          </NavigationOption>
        </Link>

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
