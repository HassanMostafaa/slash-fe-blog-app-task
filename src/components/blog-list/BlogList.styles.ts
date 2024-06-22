"use client";
import styled from "styled-components";
import Link from "next/link";

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  a {
    font-size: 1rem;
    color: #0070f3;
    text-decoration: none;
    margin-top: auto; /* Push the link to the bottom */

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 10px;
  color: #333;
`;

export const Excerpt = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;
