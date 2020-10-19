import React from "react";

import { HomeComponent, Container, Banner, Row } from "./styles";
import Product from "../Product";

const Home = () => {
  return (
    <HomeComponent>
      <Container>
        <h1>Home</h1>
        <Banner src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/gateway/placement/launch/Padre/EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_es-ES._CB419162626_.jpg" />

        <Row>
          <Product
            id="123123"
            title={
              "The Lean Startup: How Constant innovation Creates Radically Sucessfull Businesses Paperback"
            }
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="123121"
            title={
              "WD 12TB Elements Desktop Hard Drive, USB 3.0 - WDBWLG0120HBK-NESN"
            }
            price={219.99}
            image="https://images-na.ssl-images-amazon.com/images/I/716SVGVhQML._AC_SX679_.jpg"
            rating={5}
          />
        </Row>

        <Row>
          <Product
            id="123122"
            title={
              "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Silver"
            }
            price={359.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="123124"
            title={"Samsung Electronics EVO Select 256GB microSDXC"}
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61wKZ4noXaL._AC_SL1024_.jpg"
            rating={4}
          />
          <Product
            id="123125"
            title={`Samsung Galaxy Tab A 8.0" 32 GB Wifi Android 9.0`}
            price={148}
            image="https://images-na.ssl-images-amazon.com/images/I/41UPtXbP4LL._AC_SL1024_.jpg"
            rating={5}
          />
        </Row>

        <Row>
          <Product
            id="123126"
            title={"TP-Link AC1750 Smart WiFi Router (Archer A7)"}
            price={63.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
            rating={4}
          />
        </Row>
      </Container>
    </HomeComponent>
  );
};

export default Home;
