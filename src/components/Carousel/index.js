import React from "react";

import { Container, Banner } from "./styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <Container>
      <Slider {...settings}>
        <Banner src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/gateway/placement/launch/Padre/EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_es-ES._CB419162626_.jpg" />
        <Banner src="https://images-eu.ssl-images-amazon.com/images/G/30/AudibleES/es_ES/homestead/Gateway/ES-Amazon_GRD_DesktopHero_Template_1500x600b._CB402894930_.jpg" />
        <Banner src="https://images-eu.ssl-images-amazon.com/images/G/30/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-NTQzNmZkNWIt-w1500._CB404732075_.jpg" />
      </Slider>
    </Container>
  );
};

export default Carousel;
