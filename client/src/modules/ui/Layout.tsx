import styled from "styled-components";

export interface DefaultElementProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  verticalAlign?: string;
  float?: string;
  bg?: string;
  color?: string;
  gap?: string;
}

export const Column = styled.div<DefaultElementProps>`
  display: block;
`;

export const Row = styled.div<DefaultElementProps>`
  display: inline-block;
`;
