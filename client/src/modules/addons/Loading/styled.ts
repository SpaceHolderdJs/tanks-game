import styled from "styled-components";
import { Column, Row } from "../../ui/Layout";

export const Img = styled(Column)`
  background-size: cover !important;
  filter: saturate(20px);
  border: 0.5px solid black;
  border-radius: 5px;
  filter: brightness(70%);
`;

export const BulletsWrapper = styled(Row)`
  border-radius: 5px;
  z-index: 0;
  position: relative;
  overflow: hidden;

  img {
    position: relative;
    z-index: -1 !important;
  }
`;
