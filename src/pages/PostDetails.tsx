"use client";
import React from "react";
import styled from "styled-components";
import LayoutContainer from "@/src/components/layout-container/LayoutContainer";
import Link from "next/link";

interface PostDetailProps {
  post: {
    id: number | string;
    title: string;
    body: string;
  };
}

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const PostBody = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <LayoutContainer>
      <PostContainer>
        {post?.title && <PostTitle>{post.title}</PostTitle>}
        {post?.body && <PostBody>{post?.body}</PostBody>}
        <Link href="/" style={{ color: "#0070f3" }}>
          &larr; Check more blogs
        </Link>
      </PostContainer>
    </LayoutContainer>
  );
};

export default PostDetail;
