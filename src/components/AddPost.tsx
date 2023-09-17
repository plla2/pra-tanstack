import PostForm from "./PostForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../apis/posts";

const AddPost = () => {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      console.log("post 성공");
    },
  });

  const handleAddPost = (post: { [key: string]: string }) => {
    createPostMutation.mutate(post);
  };

  return (
    <div>
      <h2>Add new post</h2>
      <PostForm onSubmit={handleAddPost} />
    </div>
  );
};

export default AddPost;
