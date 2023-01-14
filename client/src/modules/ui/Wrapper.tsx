import styled from "styled-components";
import { Column } from "./Layout";

export const Wrapper = styled(Column)`
  position: relative;
  background-color: grey;
  border-radius: 5px;
  padding: 10px;

  .title {
    position: absolute;
    top: -10%;
    text-transform: uppercase;
    border-radius: 5px;
    border: 7px solid #b8b4b4;
  }
`;
