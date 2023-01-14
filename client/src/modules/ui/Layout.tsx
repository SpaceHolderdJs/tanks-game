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

export const Element = styled.div<DefaultElementProps>`
  margin: ${({ margin }) => margin || "none"};
  padding: ${({ padding }) => padding || "none"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  float: ${({ float }) => float || "none"};
  background: ${({ bg }) => bg || "none"};
  gap: ${({ gap }) => gap || "none"};
  color: ${({ color }) => color || "none"};
  vertical-align: ${({ verticalAlign }) => verticalAlign || "none"};
`;

export const Column = styled(Element)`
  display: block;
`;

export const Row = styled(Element)`
  display: inline-block;
`;
