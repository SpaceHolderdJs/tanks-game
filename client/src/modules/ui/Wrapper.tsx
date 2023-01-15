import styled from "styled-components";
import { Column } from "./Layout";

export const Wrapper = styled(Column)`
  position: relative;
  background: url("./assets/wrapper-bg.png");
  background-size: 20% 20%;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid black;

  .title {
    position: absolute;
    top: -10%;
    text-transform: uppercase;
    border-radius: 5px;
    border: 7px solid #b8b4b4;
  }
`;
