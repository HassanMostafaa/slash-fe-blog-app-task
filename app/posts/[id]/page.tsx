import { fetchPostById } from "@/src/helper/blogsHelper";
import PostDetail from "@/src/pages/PostDetails";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { id } = params;
  let post = null;

  try {
    post = await fetchPostById(id);
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }

  return <PostDetail post={post} />;
};

export default PostDetailPage;
