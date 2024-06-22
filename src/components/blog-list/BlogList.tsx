import React from "react";
import { v4 as uuidv4 } from "uuid";

import { BlogPost } from "../../helper/blogsHelper";
import {
  ListContainer,
  ListItem,
  Title,
  Excerpt,
  // ReadMoreLink,
} from "./BlogList.styles";
import Link from "next/link";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <ListContainer>
      {posts.map((post) => (
        <ListItem key={uuidv4()}>
          <Title>{post.title}</Title>
          <Excerpt>{post.body.substring(0, 100)}...</Excerpt>
          <Link href={`/posts/${post.id}`} passHref>
            Read more &#8594;
          </Link>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default BlogList;
