"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import Nav from "../nav/Nav";
import styled from "styled-components";

const DIV = styled.div`
  opacity: 1 !important;

  > div {
    max-width: 80%;
    margin: 50px auto;

    @media (max-width: 768px) {
      max-width: 95%;
    }
  }
`;

const LayoutContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <DIV style={{ opacity: 1 }}>
      <Nav />
      <div>{children}</div>
    </DIV>
  );
};

export default LayoutContainer;
