import AddPost from "../components/AddPost";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../apis/posts";
import { useNavigate } from "react-router-dom";

export interface postType {
  id: number;
  title: string;
  body: string;
}
[];

const PostLists = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return "loading...";
  if (isError) return `Error ${error}`;

  return (
    <div>
      <AddPost />
      {posts.data.map((post: postType) => (
        <div key={post.id}>
          <h4 onClick={() => navigate(`/post/${post.id}`)}>{post.title}</h4>
          <p>{post.body}</p>
          <button>수정</button>
          <button onClick={() => handleDelete(post.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default PostLists;
