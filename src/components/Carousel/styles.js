import styled from "styled-components";

export const Container = styled.div`
  width: 98.8vw;

  .slick-next {
    right: 30px;
  }

  .slick-prev {
    left: 30px;
    z-index: 100;
  }
`;

export const Banner = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
