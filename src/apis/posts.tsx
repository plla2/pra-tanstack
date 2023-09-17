import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get("http://localhost:3000/posts");
  return response;
};
export const createPost = async ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  const response = await axios.post("http://localhost:3000/posts", {
    title,
    body,
  });
  return response;
};

export const deletePost = async (id: number) => {
  const response = await axios.delete(`http://localhost:3000/posts/${id}`);
  return response;
};
