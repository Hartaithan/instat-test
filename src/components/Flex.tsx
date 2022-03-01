import React from "react";
import styled from "styled-components";

interface IFlexProps extends React.HTMLAttributes<HTMLHeadingElement> {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
}

const StyledFlex = styled.div<IFlexProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "stretch"};
  margin: ${({ margin }) => margin || 0};
`;

const Flex = (props: IFlexProps) => {
  return <StyledFlex {...props} />;
};

export default Flex;
