import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export const HeaderComponent = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

export const Search = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

export const SearchInput = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;

export const SearchInputIcon = styled(SearchIcon)`
  padding: 5px;
  background: #cd9042;
  font-size: 22px !important;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavigationOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
`;

export const NavigationOptionLineOne = styled.span`
  font-size: 10px;
`;

export const NavigationOptionLineTwo = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

export const NavigationOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Basket = styled(ShoppingBasketIcon)``;

export const BasketCount = styled.span`
  font-size: 13px;
  font-weight: 700;
  margin-left: 10px;
  margin-right: 10px;
`;
