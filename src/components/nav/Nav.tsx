"use client";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const flex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const LinkText = styled.span`
  color: #f4f4f4;
  &:hover {
    color: #0070f3;
  }
`;

const Nav: FunctionComponent = () => {
  const path = usePathname();
  return (
    <nav
      style={{
        background: "#333",
        color: "#f4f4f4",
        padding: "20px 32px",
        fontSize: 20,
        ...flex,
      }}
    >
      <h1>B.</h1>
      <div className="menu" style={{ ...flex, gap: 40 }}>
        <Link
          href={`/`}
          passHref
          style={{
            borderBottom: path === "/" ? "1px solid #0071f3df" : "none",
          }}
        >
          <LinkText>Home</LinkText>
        </Link>
        <Link
          href={`/create`}
          passHref
          style={{
            borderBottom: path === "/create" ? "1px solid #0071f3df" : "none",
          }}
        >
          <LinkText>Create post</LinkText>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
